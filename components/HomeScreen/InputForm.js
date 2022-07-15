import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const InputForm = ({ title }) => {
    const [name, setName] = useState("");
    return (
        <View style={styles.inputWrapper}>
            <Image
                source={require("../../assets/icons/menu.png")}
                style={{ width: 21.19, height: 17.14 }}
            />

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
