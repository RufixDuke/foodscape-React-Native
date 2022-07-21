import {
    View,
    Text,
    Pressable,
    Image,
    // TextInput,
    StyleSheet,
    Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { setTasks } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddressInput = ({ navigation }) => {
    const { tasks, taskID } = useSelector((state) => state.taskReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

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
            Alert.alert("Warning", "Please write your address title.");
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
                        Alert.alert("Success!", "Address saved successfully.");
                        navigation.goBack();
                    }
                );
            } catch (error) {
                console.log(error);
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
                // alignItems: "center",
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
                    Input your Address here
                </Text>
                <Text></Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Home, Workplace e.t.c"
                onChangeText={(value) => setTitle(value)}
                value={title}
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                multiline
                onChangeText={(value) => setDesc(value)}
                value={desc}
            />
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#F8BE94" : "#F27C28",
                        paddingVertical: 20,
                        borderRadius: 20,
                        marginHorizontal: 20,
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
                    Save Address
                </Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        width: "100%",
        // borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "left",
        fontSize: 14,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default AddressInput;
