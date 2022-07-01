import {
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../../firebase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Must be present"),
    username: Yup.string()
        .required()
        .min(2, "must not be less than 2 characters"),
    password: Yup.string()
        .min(5, "characters must not be less than 5")
        .required(),
});

// const getRandomProfilePicture = async () => {
//     const response = await fetch("https://randomuser.me/api");
//     const data = await response.json();
//     return data.results[0].picture.large;
// };

const SignUp = ({ navigation }) => {
    const onSignUp = async (email, password) => {
        try {
            const authUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            console.log("Firebase SignUp Successful", email, password);

            db.collection("users")
                .doc(authUser.user.email)
                .set({
                    owner_uid: authUser.user.uid,
                    username: username,
                    email: authUser.user.email,
                    profile_picture: await getRandomProfilePicture(),
                });
        } catch (error) {
            Alert.alert(`Hello ${email}`, error.message);
        }
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                onSignUp(values.email, values.password);
                // navigation.push("Homescreen");
            }}
            validationSchema={signUpSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
                <>
                    <View style={styles.wrapper}>
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
                                placeholder="Email, phone number"
                                placeholderTextColor="gray"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                // autoFocus={true}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                        </View>

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
                                placeholder="Password"
                                placeholderTextColor="gray"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType="password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </View>
                        <ErrorMessage />
                        <Text
                            style={{
                                color: "#2A2A2A",
                                fontSize: 11,
                                textAlign: "center",
                                marginTop: 5,
                                marginBottom: 11,
                            }}
                        >
                            By Signing up you agree to our terms and Data
                            policy.
                        </Text>

                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.signUpContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("LoginForm")}
                            >
                                <Text style={{ color: "#6BB0F5" }}>
                                    {" "}
                                    Log In
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
        paddingVertical: 13,
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

export default SignUp;
