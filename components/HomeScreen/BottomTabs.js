import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const BottomTabs = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
                    <Image
                        style={styles.text}
                        source={require("../../assets/icons/home-filled.png")}
                    />
                    <Text style={{ color: "#F27C28" }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.push("RecentScreen")}
                >
                    <Image
                        style={styles.text}
                        source={require("../../assets/icons/recent-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Recent</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("Favorite")}>
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/icons/heart-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Favorite</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("Carts")}>
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/icons/cart-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Carts</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("Profile")}>
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/icons/user-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: "0%",
        zIndex: 999,
        backgroundColor: "#FAFAFA",
        // marginTop: 10,
    },
    container: {
        height: 65,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
    },
    text: {
        width: 22,
        height: 22,
        marginLeft: 5,
    },
    fav: {
        width: 23.5,
    },
});

export default BottomTabs;
