import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const BottomTabs = ({ navigation }) => {
    const { cart } = useSelector((state) => state.handleCart);
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.push("HomeScreen")}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        style={styles.text}
                        source={require("../../assets/icons/home-filled.png")}
                    />
                    <Text style={{ color: "#F27C28" }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.push("RecentScreen")}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        style={styles.text}
                        source={require("../../assets/icons/recent-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Recent</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.push("Favorite")}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/icons/heart-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Favorite</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Carts")}
                    style={{
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        style={[styles.text, styles.fav]}
                        source={require("../../assets/icons/cart-gray.png")}
                    />
                    <Text style={{ color: "#B6B6B6" }}>Carts</Text>
                    <Text
                        style={{
                            position: "absolute",
                            right: -6,
                            top: -4,
                            backgroundColor: "#F27C28",
                            paddingHorizontal: 4,
                            borderRadius: 4,
                            color: "#F6F6F6",
                            fontWeight: "600",
                        }}
                    >
                        {cart.length}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.push("Profile")}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
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
    },
    container: {
        height: 65,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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
