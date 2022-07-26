import {
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import React, { useRef } from "react";
import Validator from "email-validator";
import { firebase } from "../../firebase";
import { auth } from "../../firebase";
import { useState } from "react";
import LinkSent from "./LinkSent";

const ForgotPassword = ({ navigation }) => {
    const emailRef = useRef("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const forgotPassword = async (email) => {
        try {
            setLoading(true);
            const authUser = await firebase
                .auth()
                .sendPasswordResetEmail(email, auth);
            setLoading(false);
            navigation.navigate("LinkSent");

            return authUser;
        } catch (error) {
            Alert.alert(`Hello ${email}`, error.message);
        }
    };

    const forgotPasswordHandler = () => {
        if (email)
            forgotPassword(email).then(() => {
                emailRef.current = "";
            });
    };

    const Loading = () => <ActivityIndicator size="small" />;

    return (
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
                                email.length < 1 || Validator.validate(email)
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
                        onChangeText={(values) => setEmail(values)}
                        value={email}
                    />
                </View>

                <Pressable
                    titleSize={20}
                    style={styles.button}
                    onPress={forgotPasswordHandler}
                >
                    <Text style={styles.buttonText}>
                        {loading ? <Loading /> : "Send Link"}
                    </Text>
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
