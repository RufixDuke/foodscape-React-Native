import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

export const bottomIcons = [
    {
        name: "Home",
        active: require("../../assets/home-filled.png"),
        inactive: require("../../assets/home.png"),
    },
    {
        name: "Search",
        active: require("../../assets/search.png"),
        inactive: require("../../assets/search.png"),
    },
    {
        name: "Reels",
        active: require("../../assets/frame-filled.png"),
        inactive: require("../../assets/frame.png"),
    },
    {
        name: "Shop",
        active: require("../../assets/shop-filled.png"),
        inactive: require("../../assets/shop.png"),
    },
    {
        name: "User",
        active: { uri: "https://i.imgur.com/dxjd7FB.jpg" },
        inactive: { uri: "https://i.imgur.com/dxjd7FB.jpg" },
    },
];

const BottomTabs = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {bottomIcons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    );
};

const Icon = ({ icon }) => {
    const [activeTab, setActiveTab] = useState("Home");
    const onPress = () => setActiveTab(icon.name);
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                style={[
                    styles.text,
                    icon.name === "User" ? styles.profilePic() : null,
                    activeTab === "User" && icon.name === activeTab
                        ? styles.profilePic(activeTab)
                        : null,
                ]}
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
