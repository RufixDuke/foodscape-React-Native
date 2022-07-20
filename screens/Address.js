import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AsyncStorage from "react-native";
import { setTasks, setTaskID } from "../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Address = ({ navigation }) => {
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
            .catch((err) => console.log(err));
    };
    return (
        <View
            style={{
                paddingTop: 60,
                marginHorizontal: 20,
                backgroundColor: "#F5F5F5",
                flex: 1,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                    Address
                </Text>
                <Text></Text>
            </View>

            <View style={{ position: "relative", flex: 1 }}>
                <Pressable
                    style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#F27C28",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 27.5,
                        position: "absolute",
                        right: 0,
                        bottom: 100,
                    }}
                    onPress={() => {
                        dispatch(setTaskID(tasks.length + 1));
                        navigation.navigate("AddressInput");
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

export default Address;
