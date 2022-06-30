import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>foodscape</Text>
            </View>

            <Pressable style={styles.btn}>
                <Text>Get Started</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F27C28",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "700",
    },
    btn: {
        color: "#F27C28",
        backgroundColor: "white",
    },
});

export default WelcomeScreen;
