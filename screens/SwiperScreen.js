import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

import Swiper from "react-native-swiper";

const SwiperScreen = ({ navigation }) => {
    return (
        <Swiper
            style={styles.wrapper}
            paginationStyle={styles.wrapper}
            loop={false}
            index={0}
        >
            <View style={styles.slide1}>
                <Image
                    source={require("../assets/icons/BBQChickenPizza.jpg")}
                    style={{
                        height: 480,
                        borderBottomLeftRadius: 90,
                        width: 375,
                        borderBottomRightRadius: 90,
                    }}
                />
                <Text style={styles.text}>
                    We have the best restaurants with exquisite local and
                    international dishes.
                </Text>
                <Pressable style={{ position: "absolute", top: 50, right: 10 }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: "900",
                        }}
                    >
                        Skip
                    </Text>
                </Pressable>
            </View>

            <View style={styles.slide2}>
                <Image
                    source={require("../assets/icons/Pizza1.jpg")}
                    style={{
                        height: 480,
                        borderBottomLeftRadius: 90,
                        width: 375,
                        borderBottomRightRadius: 90,
                    }}
                />
                <Text style={styles.text}>
                    We have the best restaurants with exquisite local and
                    international dishes.
                </Text>
                <Pressable
                    style={{ position: "absolute", top: 50, right: 10 }}
                    onPress={() => navigation.push("LoginScreen")}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: "900",
                        }}
                    >
                        Skip
                    </Text>
                </Pressable>
            </View>

            <View style={styles.slide3}>
                <Image
                    source={require("../assets/icons/Pizza3.jpg")}
                    style={{
                        height: 480,
                        borderBottomLeftRadius: 90,
                        width: 375,
                        borderBottomRightRadius: 90,
                    }}
                />
                <Text style={styles.text}>
                    Order for your frequent meals and side dishes just with 2
                    clicks.
                </Text>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? "#F8BE94" : "#F27C28" },
                        styles.btn,
                    ]}
                    onPress={() => navigation.push("LoginScreen")}
                >
                    <Text style={styles.btnText}>Next</Text>
                </Pressable>
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        position: "relative",
    },
    slide2: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        position: "relative",
    },
    slide3: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        position: "relative",
    },
    text: {
        color: "#333333",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 45,
        marginHorizontal: 40,
        textAlign: "center",
    },
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        position: "absolute",
        bottom: 60,
    },
});

export default SwiperScreen;
