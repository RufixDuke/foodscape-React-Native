import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { useEffect } from "react";

import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const WelcomeScreen = ({ navigation }) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace("SwiperScreen");
    //     }, 5000);
    // });

    let [fontsLoaded, error] = useFonts({
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* <Image source={require("../assets/icons/Foodscape.png")} /> */}
                <Text style={styles.text}>foodscape</Text>
            </View>
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
        fontFamily: "Poppins_700Bold",
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
