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

const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Must be present"),
});

const ForgotPassword = ({ navigation }) => {
    const emailRef = useRef();
    const forgotPassword = async (email) => {
        // return sendPasswordResetEmail(auth, email);

        try {
            const authUser = await firebase
                .auth()
                .sendPasswordResetEmail(email, auth);
            console.log("Firebase Reset Password Successful", email);

            // db.collection("users")
            //     .doc(authUser.user.email)
            //     .set({
            //         owner_uid: authUser.user.uid,
            //         username: username,
            //         email: authUser.user.email,
            //         profile_picture: await getRandomProfilePicture(),
            //     });
        } catch (error) {
            Alert.alert(`Hello ${email}`, error.message);
        }
    };

    const forgotPasswordHandler = () => {
        // const email = emailRef.current.value;
        if (value.email)
            forgotPassword(email).then(() => {
                value.email = "";
            });
    };

    return (
        <Formik
            initialValues={{ email: "" }}
            onSubmit={forgotPasswordHandler}
            validationSchema={signUpSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
                <>
                    <View style={styles.wrapper}>
                        <Text style={{ color: "#828282", fontSize: 12 }}>
                            Email Address
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

                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Send Link</Text>
                        </Pressable>
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
});

export default ForgotPassword;
