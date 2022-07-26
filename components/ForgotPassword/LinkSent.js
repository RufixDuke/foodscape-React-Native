import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";

const LinkSent = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Text
                style={{
                    color: "#2A2A2A",
                    fontSize: 30,
                    fontWeight: "800",
                    marginBottom: 30,
                }}
            >
                Link Sent!
            </Text>
            <Text
                style={{
                    color: "#4F4F4F",
                    fontSize: 16,
                    fontWeight: "500",
                    marginBottom: 60,
                }}
            >
                Please check your email and click link to reset your password.
                Check your spam folder also if you can't find it in your inbox.
            </Text>

            <Pressable
                titleSize={20}
                style={styles.button}
                onPress={() => navigation.navigate("LoginScreen")}
            >
                <Text style={styles.buttonText}>Got it</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 90,
        padding: 10,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: "#F27C28",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 32,
        paddingVertical: 16,
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 16,
    },
});

export default LinkSent;
