import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

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
                {bottomIcons.map((icon, index) => (
                    <Icon key={index} icon={icon} navigation={navigation} />
                ))}
            </View>
        </View>
    );
};

const Icon = ({ icon }) => {
    const [activeTab, setActiveTab] = useState("Home");
    const [activeNav, setActiveNav] = useState("");
    const onPress = () => {
        setActiveTab(icon.name);
        // nagivation.push(activeNav);
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                style={styles.text}
                source={activeTab === icon.name ? icon.active : icon.inactive}
            />
        </TouchableOpacity>
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
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
    },
    text: {
        width: 25,
        height: 25,
    },
});

export default BottomTabs;
