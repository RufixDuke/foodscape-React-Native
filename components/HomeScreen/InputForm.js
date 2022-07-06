import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";

const InputForm = ({ title }) => {
    return (
        <View style={styles.inputWrapper}>
            <Image
                source={require("../../assets/icons/Group.png")}
                style={{ width: 21.19, height: 17.14 }}
            />
            <Formik
                initialValues={{ name: "" }}
                onSubmit={() => {
                    console.log("Yoooooooooooo");
                    // navigation.push("Homescreen");
                }}
            >
                {({ handleBlur, handleChange, handleSubmit, values }) => (
                    <>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder={title}
                                placeholderTextColor="gray"
                                autoCapitalize="none"
                                keyboardType="default"
                                textContentType="name"
                                // autoFocus={true}
                                onChangeText={handleChange("name")}
                                onBlur={handleBlur("name")}
                                value={values.name}
                            />
                        </View>
                        <TouchableOpacity onPress={handleSubmit}>
                            <Pressable>
                                <Image
                                    source={require("../../assets/icons/search.png")}
                                />
                            </Pressable>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
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
