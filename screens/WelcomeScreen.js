import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>foodscape</Text>
            </View>

            <Pressable
                style={styles.btn}
                onPress={() => navigation.push("SwiperScreen")}
            >
                <Text style={styles.btnText}>Get Started</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F27C28",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "900",
    },
    btn: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        position: "absolute",
        bottom: 60,
    },
    btnText: {
        color: "#F27C28",
        fontSize: 16,
    },
});

export default WelcomeScreen;
