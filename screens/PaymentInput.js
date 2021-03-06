import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    Alert,
    ImageBackground,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { setTasks } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const PaymentInput = ({ navigation }) => {
    const { tasks, taskID } = useSelector((state) => state.taskReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [expire, setExpire] = useState("");
    const [cvv, setCVV] = useState("");
    const [name, setName] = useState("");

    let newDesc = desc.match(/.{1,4}/g);
    let newExpire = expire.match(/.{1,2}/g);

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        const Task = tasks.find((task) => task.ID === taskID);
        if (Task) {
            setTitle(Task.Title);
            setDesc(Task.Desc);
        }
    };

    const setTask = () => {
        if (title.length == 0) {
            Alert.alert("Warning", "Please write your Card title.");
        } else {
            try {
                var Task = {
                    ID: taskID,
                    Title: title,
                    Desc: desc,
                };
                const index = tasks.findIndex((task) => task.ID === taskID);
                let newTasks = [];
                if (index > -1) {
                    newTasks = [...tasks];
                    newTasks[index] = Task;
                } else {
                    newTasks = [...tasks, Task];
                }
                AsyncStorage.setItem("Tasks", JSON.stringify(newTasks)).then(
                    () => {
                        dispatch(setTasks(newTasks));
                        Alert.alert("Success!", "Card saved successfully.");
                        navigation.goBack();
                    }
                );
            } catch (error) {
                Alert.alert(error.message);
            }
        }
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
                    Input your Card Details here
                </Text>
                <Text></Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <View>
                    <ImageBackground
                        source={require("../assets/Credit-card-mockup.png")}
                        style={{
                            width: "100%",
                            height: 170,
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                color: "#FFFFFF",
                                marginLeft: 20,
                                marginTop: 15,
                                fontSize: 16,
                                fontWeight: "700",
                            }}
                        >
                            Untitled
                        </Text>
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginLeft: 30,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: 14,
                                        fontWeight: "700",
                                    }}
                                >
                                    {name}
                                </Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#FFFFFF" }}>
                                        {expire.length === 0
                                            ? expire
                                            : newExpire.join("/")}
                                    </Text>
                                </View>
                                <Text></Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 20,
                                    marginHorizontal: 30,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: 16,
                                        fontWeight: "700",
                                        letterSpacing: 2,
                                    }}
                                >
                                    {desc.length === 0
                                        ? desc
                                        : newDesc.join(" ")}
                                </Text>
                                {title === "" ? (
                                    <Text></Text>
                                ) : title === "MasterCard" ? (
                                    <Image
                                        source={require("../assets/icons/mastercard.png")}
                                        style={{ width: 35, height: 35 }}
                                    />
                                ) : (
                                    <Image
                                        source={require("../assets/icons/visa.png")}
                                        style={{ width: 35, height: 35 }}
                                    />
                                )}
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <Text style={{ color: "#828282" }}>Card Name</Text>
                <View style={styles.inputField}>
                    <Picker
                        selectedValue={title}
                        onValueChange={(itemValue, itemIndex) =>
                            setTitle(
                                itemValue === ""
                                    ? (itemValue = "MasterCard")
                                    : itemValue
                            )
                        }
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="MasterCard" value="MasterCard" />
                        <Picker.Item label="VISA" value="VISA" />
                    </Picker>
                </View>
            </View>

            <Text style={{ color: "#828282" }}>Account Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => setName(value)}
                value={name}
                textContentType="name"
            />

            <Text style={{ color: "#828282" }}>Card Number</Text>
            <TextInput
                style={[styles.input]}
                multiline
                onChangeText={(value) => setDesc(value)}
                value={desc}
                maxLength={16}
                keyboardType="numeric"
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={{ color: "#828282" }}>Expiration Date</Text>
                    <TextInput
                        style={[styles.input, { width: 180 }]}
                        multiline
                        onChangeText={(value) => setExpire(value)}
                        value={expire}
                        maxLength={4}
                        keyboardType="numeric"
                    />
                </View>

                <View>
                    <Text style={{ color: "#828282" }}>CVV</Text>
                    <TextInput
                        style={[styles.input, { width: 120 }]}
                        multiline
                        onChangeText={(value) => setCVV(value)}
                        value={cvv}
                        maxLength={3}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#F8BE94" : "#F27C28",
                        paddingVertical: 20,
                        borderRadius: 20,
                        marginTop: 20,
                    },
                ]}
                onPress={setTask}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: 16,
                    }}
                >
                    Save Card
                </Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderColor: "#555555",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "left",
        fontSize: 14,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20,
    },
    inputField: {
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        paddingHorizontal: 8,
        width: 320,
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 10,
    },
});

export default PaymentInput;
