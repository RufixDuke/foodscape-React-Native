import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import React from "react";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.text}>Forgot Password</Text>
                <Text style={{ fontSize: 14, color: "#4F4F4F" }}>
                    Enter your email address to reset your password.
                </Text>
                <View style={styles.imgContainer}>
                    <Image
                        source={require("../assets/icons/rafiki.png")}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <ForgotPassword navigation={navigation} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    imgContainer: {
        alignItems: "center",
        marginTop: 40,
    },
    text: {
        fontSize: 27,
        fontWeight: "800",
        color: "#2A2A2A",
        marginLeft: 5,
        marginTop: 15,
    },
});

export default ForgotPasswordScreen;
