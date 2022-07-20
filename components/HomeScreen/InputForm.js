import { View, Pressable, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";

const InputForm = ({ title, navigation }) => {
    const [name, setName] = useState("");
    return (
        <View style={styles.inputWrapper}>
            <Pressable onPress={() => navigation.openDrawer()}>
                <Image
                    source={require("../../assets/icons/menu.png")}
                    style={{ width: 21.19, height: 17.14 }}
                />
            </Pressable>

            <View style={styles.inputField}>
                <TextInput
                    placeholder={title}
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    keyboardType="default"
                    textContentType="name"
                    // autoFocus={true}
                    onChangeText={(name) => setName(name)}
                    // onSubmitEditing={fetchingDatas}
                    value={name}
                />
            </View>
            <Pressable>
                <Image source={require("../../assets/icons/search.png")} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        // flex: 1,
        marginTop: 24,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    inputField: {
        borderWidth: 0,
        borderRadius: 32,
        backgroundColor: "#FAFAFA",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: 200,
    },
});

export default InputForm;
