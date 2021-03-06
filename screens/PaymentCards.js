import {
    View,
    Text,
    Pressable,
    Image,
    FlatList,
    StyleSheet,
    Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks, setTaskID } from "../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EmptyPage from "../components/ErrorMessage/EmptyPage";

const PaymentCards = ({ navigation }) => {
    const { tasks } = useSelector((state) => state.taskReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        AsyncStorage.getItem("Tasks")
            .then((tasks) => {
                const parseTasks = JSON.parse(tasks);
                if (parseTasks && typeof parseTasks === "object") {
                    dispatch(setTasks(parseTasks));
                }
            })
            .catch((error) => {
                Alert.alert(`Hello User`, error.message);
            });
    };

    const deleteAddress = (id) => {
        const filteredAddress = tasks.filter((task) => task.ID !== id);
        AsyncStorage.setItem("Tasks", JSON.stringify(filteredAddress))
            .then(() => {
                dispatch(setTasks(filteredAddress));
                Alert.alert("Success!", "Card removed successfully.");
            })
            .catch((error) => {
                Alert.alert(`Hello User`, error.message);
            });
    };

    const alertPrompt = (id) => {
        Alert.alert(
            "Hey, Hold on!!",
            "Are you sure you want to delete this card???",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        deleteAddress(id);
                    },
                },
                {
                    text: "No",
                    onPress: () => {},
                    style: "cancel",
                },
            ]
        );
    };
    return (
        <View
            style={{
                paddingTop: 60,
                marginHorizontal: 10,
                backgroundColor: "#F5F5F5",
                flex: 1,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginBottom: 30,
                }}
            >
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/icons/left-arrow.png")}
                        style={{ width: 20, height: 17.14 }}
                    />
                </Pressable>
                <Text
                    style={{
                        marginRight: 15,
                        color: "#333333",
                        fontSize: 20,
                        fontWeight: "800",
                    }}
                >
                    Payment Cards
                </Text>
                <Text></Text>
            </View>
            {tasks.length === 0 ? (
                <EmptyPage
                    navigation={navigation}
                    title="No Card available"
                    desc="You haven't added any card yet."
                    image={require("../assets/icons/credit-card-big.png")}
                />
            ) : (
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.wrapper}
                            onPress={() => {
                                dispatch(setTaskID(item.ID));
                                navigation.navigate("AddressInput");
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 200,
                                    alignItems: "center",
                                }}
                            >
                                {item.Title === "MasterCard" ? (
                                    <Image
                                        source={require("../assets/icons/mastercard.png")}
                                    />
                                ) : (
                                    <Image
                                        source={require("../assets/icons/visa.png")}
                                    />
                                )}

                                <View style={{ marginLeft: 10 }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            marginBottom: 5,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {item.Title}
                                    </Text>
                                    <Text numberOfLines={2}>
                                        {item.Desc.match(/.{1,4}/g).join(" ")}
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Pressable
                                    onPress={() => {
                                        alertPrompt(item.ID);
                                    }}
                                >
                                    <Image
                                        source={require("../assets/icons/trash.png")}
                                        style={{ width: 25, height: 25 }}
                                    />
                                </Pressable>

                                <Image
                                    source={require("../assets/icons/arrow-right.png")}
                                    style={{ marginLeft: 8 }}
                                />
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}

            <View style={{ position: "relative", flex: 1 }}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            width: 55,
                            height: 55,
                            backgroundColor: pressed ? "#F8BE94" : "#F27C28",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 27.5,
                            position: "absolute",
                            right: 10,
                            bottom: 100,
                        },
                    ]}
                    onPress={() => {
                        dispatch(setTaskID(tasks.length + 1));
                        navigation.navigate("PaymentInput");
                    }}
                >
                    <Image
                        source={require("../assets/icons/plus-white.png")}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginHorizontal: 20,
        paddingVertical: 13,
        backgroundColor: "#FEFEFE",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        borderRadius: 6,
        paddingLeft: 5,
    },
});

export default PaymentCards;
