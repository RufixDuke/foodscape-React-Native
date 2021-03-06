import {
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase } from "../../firebase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Must be present"),
    password: Yup.string()
        .min(6, "characters must not be less than 5")
        .required(),
});

const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const onSignUp = async (email, password) => {
        try {
            setLoading(true);
            const authUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            setLoading(false);
            navigation.navigate("HomeScreen");

            return authUser;
        } catch (error) {
            Alert.alert(`Hello ${email}`, error.message);
        }
    };

    const Loading = () => <ActivityIndicator size="small" />;

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                onSignUp(values.email, values.password);
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
                            <Text style={styles.buttonText}>
                                {loading ? <Loading /> : "Sign Up"}
                            </Text>
                        </Pressable>

                        <Text
                            style={{
                                textAlign: "center",
                                marginVertical: 10,
                                color: "#2A2A2A",
                                fontSize: 14,
                            }}
                        >
                            OR
                        </Text>

                        <Pressable titleSize={20} style={styles.btn2}>
                            <Image
                                source={require("../../assets/icons/google.png")}
                                style={{ width: 22, height: 22 }}
                            />
                            <Text
                                style={{
                                    color: "#2A2A2A",
                                    marginLeft: 10,
                                    fontSize: 12,
                                }}
                            >
                                Continue with Google
                            </Text>
                        </Pressable>

                        <Pressable
                            titleSize={20}
                            style={[styles.btn2, styles.fb]}
                        >
                            <Image
                                source={require("../../assets/icons/facebook.png")}
                                style={{ width: 22, height: 22 }}
                            />
                            <Text
                                style={{
                                    color: "#2A2A2A",
                                    marginLeft: 10,
                                    fontSize: 12,
                                }}
                            >
                                Continue with Facebook
                            </Text>
                        </Pressable>

                        <View style={styles.signUpContainer}>
                            <Text style={{ color: "#2A2A2A", fontSize: 12 }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("LoginScreen")}
                            >
                                <Text
                                    style={{ color: "#F27C28", fontSize: 14 }}
                                >
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
        borderRadius: 32,
        paddingVertical: 13,
    }),
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 16,
    },
    signUpContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50,
    },
    btn2: {
        backgroundColor: "#FEFEFE",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 70,
        borderRadius: 32,
    },
    fb: {
        marginTop: 7,
    },
});

export default SignUp;
