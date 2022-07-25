import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import EmptyPage from "../components/ErrorMessage/EmptyPage";
import { StyleSheet } from "react-native";

const Favorite = ({ navigation }) => {
    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 20,
                    paddingTop: 50,
                }}
            >
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require("../assets/icons/left-arrow.png")} />
                </Pressable>
                <Text
                    style={{
                        marginRight: 20,
                        fontSize: 25,
                        fontWeight: "700",
                        color: "#333333",
                    }}
                >
                    Favorites
                </Text>
                <Text></Text>
            </View>
            <EmptyPage
                navigation={navigation}
                title="No Favorite yet"
                desc="Click on the button below to add a favorite food"
                image={require("../assets/icons/heart-big.png")}
            />
            <Pressable
                style={styles.cartBtn}
                onPress={() => navigation.navigate("HomeScreen")}
            >
                <Text style={styles.cartBtnText}>Okay, Let's go</Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    cartBtn: {
        backgroundColor: "#F27C28",
        marginHorizontal: 20,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginTop: 30,
        marginBottom: 30,
    },
    cartBtnText: {
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: 20,
    },
});
export default Favorite;
