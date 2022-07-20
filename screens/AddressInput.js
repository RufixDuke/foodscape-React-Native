import {
    View,
    Text,
    Pressable,
    Image,
    TextInput,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";

const AddressInput = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
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
                style={{
                    backgroundColor: "#F27C28",
                    paddingVertical: 20,
                    borderRadius: 20,
                    marginHorizontal: 20,
                }}
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
