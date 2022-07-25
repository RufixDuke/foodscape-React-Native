import {
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Image,
} from "react-native";
import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../../firebase";
import { auth } from "../../firebase";
import { useState } from "react";

const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Must be present"),
});

const ForgotPassword = ({ navigation }) => {
    const emailRef = useRef("");
    const [email, setEmail] = useState("");

    const forgotPassword = async (email) => {
        // return sendPasswordResetEmail(auth, email);

        try {
            const authUser = await firebase
                .auth()
                .sendPasswordResetEmail(email, auth);
            console.log("Firebase Reset Password Successfully sent", email);

            // db.collection("users")
            //     .doc(authUser.user.email)
            //     .set({
            //         owner_uid: authUser.user.uid,
            //         username: username,
            //         email: authUser.user.email,
            //         profile_picture: await getRandomProfilePicture(),
            //     });
            return authUser;
        } catch (error) {
            Alert.alert(`Hello ${email}`, error.message);
        }
    };

    const forgotPasswordHandler = () => {
        // email = emailRef.current;
        console.log("hmmm");
        if (email)
            forgotPassword(email).then(() => {
                emailRef.current = "";
                console.log(typeof emailRef.current);
            });
    };

    return (
        <>
            <View style={styles.wrapper}>
                <Text style={{ color: "#828282", fontSize: 12 }}>
                    Email Address
                </Text>
                <View
                    style={[
                        styles.inputField,
                        // {
                        //     borderColor:
                        //         values.email.length < 1 ||
                        //         Validator.validate(values.email)
                        //             ? "#F59D5E"
                        //             : "#EB5757",
                        // },
                    ]}
                >
                    <TextInput
                        placeholder="Email, phone number"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText={(values) => setEmail(values)}
                        // onBlur={handleBlur("email")}
                        value={email}
                        // ref={emailRef}
                    />
                </View>

                <Pressable
                    titleSize={20}
                    style={styles.button}
                    onPress={forgotPasswordHandler}
                    // disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Send Link</Text>
                </Pressable>
            </View>
        </>
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
    button: {
        backgroundColor: "#F27C28",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 32,
        paddingVertical: 13,
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 16,
    },
});

export default ForgotPassword;
