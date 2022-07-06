import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

export const bottomIcons = [
    {
        name: "Home",
        active: require("../../assets/BottomTabs/home-filled.png"),
        inactive: require("../../assets/BottomTabs/home.png"),
        nav: "HomeScreen",
    },
    {
        name: "Recent",
        active: require("../../assets/BottomTabs/recent-filled.png"),
        inactive: require("../../assets/BottomTabs/recent.png"),
        nav: "RecentScreen",
    },
    {
        name: "Favorites",
        active: require("../../assets/BottomTabs/favorite-filled.png"),
        inactive: require("../../assets/BottomTabs/favorite.png"),
    },
    {
        name: "Cart",
        active: require("../../assets//BottomTabs/cart-filled.png"),
        inactive: require("../../assets/BottomTabs/cart.png"),
    },
    {
        name: "Profile",
        active: require("../../assets/BottomTabs/profile-filled.png"),
        inactive: require("../../assets/BottomTabs/profile.png"),
    },
];

const BottomTabs = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.replace("HomeScreen")}
                >
                    <Image
                        style={styles.text}
                        source={require("../../assets/BottomTabs/home-filled.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.replace("RecentScreen")}
                >
                    <Image
                        style={styles.text}
                        source={require("../../assets/BottomTabs/recent.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Recent</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.replace("Favorite")}
                >
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/BottomTabs/favorite.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Favorite</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace("Carts")}>
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/BottomTabs/cart.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Carts</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace("Profile")}>
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/BottomTabs/profile.png")}
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
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    fav: {
        width: 22,
    },
});

export default BottomTabs;
