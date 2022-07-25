import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import React from "react";
import Login from "../components/Login/Login";

const LoginScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.text}>Log In</Text>
                <View style={styles.imgContainer}>
                    <Image
                        source={require("../assets/icons/bro.png")}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <Login navigation={navigation} />
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
        marginTop: 60,
    },
    text: {
        fontSize: 25,
        fontWeight: "800",
        color: "#2A2A2A",
        marginLeft: 5,
        marginTop: 15,
    },
});

export default LoginScreen;
