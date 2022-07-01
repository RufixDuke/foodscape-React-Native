import {
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase } from "../../firebase";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Must be present"),
    password: Yup.string()
        .min(6, "characters must not be less then 6")
        .required(),
});

const Login = () => {
    const onLogin = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("Firebase Login Successful", email, password);
        } catch (error) {
            Alert.alert(
                `Hello ${email}`,
                error.message + "\n\n .. What would you like to do next",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK"),
                        style: "cancel",
                    },
                    {
                        text: "Sign Up",
                        onPress: () => navigation.push("SignUpForm"),
                    },
                ]
            );
        }
    };
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                onLogin(values.email, values.password);
                // navigation.push("Homescreen");
            }}
            validationSchema={LoginSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
                <>
                    <View style={styles.wrapper}>
                        <Text
                            style={{
                                marginBottom: 20,
                                // fontWeight: "800",
                                fontSize: 20,
                                color: "#2A2A2A",
                            }}
                        >
                            Welcome back
                        </Text>
                        <Text style={{ marginBottom: 5, color: "#828282" }}>
                            Email or Phone number
                        </Text>
                        <View
                            style={[
                                styles.inputField,
                                {
                                    borderColor:
                                        values.email.length < 1 ||
                                        Validator.validate(values.email)
                                            ? "#F59D5E"
                                            : "#EB5757",
                                },
                            ]}
                        >
                            <TextInput
                                autoCapitalize="none"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                // autoFocus={true}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                        </View>
                        <Text style={{ marginBottom: 5, color: "#828282" }}>
                            Password
                        </Text>
                        <View
                            style={[
                                styles.inputField,
                                {
                                    borderColor:
                                        1 > values.password.length ||
                                        values.password.length >= 6
                                            ? "#F59D5E"
                                            : "#EB5757",
                                },
                            ]}
                        >
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={false}
                                secureTextEntry={true}
                                textContentType="password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </View>
                        <View
                            style={{
                                alignItems: "flex-end",
                                marginBottom: 30,
                            }}
                        >
                            <Text style={{ color: "#828282" }}>
                                Forgot Password?
                            </Text>
                        </View>

                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <View style={styles.signUpContainer}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("SignUpScreen")}
                            >
                                <Text style={{ color: "#F59D5E" }}>
                                    {" "}
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        padding: 10,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "#E0E0E0",
        padding: 12,
        marginBottom: 10,
    },
    button: (isValid) => ({
        backgroundColor: isValid ? "#F27C28" : "#E0E0E0",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 50,
    }),
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20,
    },
    signUpContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50,
    },
});

export default Login;
