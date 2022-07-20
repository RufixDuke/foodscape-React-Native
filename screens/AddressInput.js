import {
    View,
    Text,
    Pressable,
    Image,
    TextInput,
    StyleSheet,
} from "react-native";
import React from "react";

const AddressInput = ({ navigation }) => {
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
            <TextInput style={styles.input} placeholder="Title" />
            <TextInput style={styles.input} placeholder="Address" multiline />
            <Pressable
                style={{
                    backgroundColor: "#F27C28",
                    paddingVertical: 20,
                    borderRadius: 10,
                }}
            >
                <Text>Save Address</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "left",
        fontSize: 20,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default AddressInput;
