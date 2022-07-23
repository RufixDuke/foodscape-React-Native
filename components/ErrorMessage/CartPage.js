import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const CartPage = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={require("../../assets/icons/cart-big.png")}
                style={{ width: 200, height: 200, marginBottom: 10 }}
            />
            <Text
                style={{
                    color: "#4F4F4F",
                    fontSize: 20,
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                No Items in Cart
            </Text>
            <Text style={{ color: "#828282", textAlign: "center" }}>
                You haven’t ordered a meal yet.
            </Text>
            <Pressable
                style={styles.cartBtn}
                onPress={() => navigation.navigate("HomeScreen")}
            >
                <Text style={styles.cartBtnText}>Start Ordering</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    cartBtn: {
        backgroundColor: "#F27C28",
        marginHorizontal: 20,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginTop: 50,
        justifyContent: "flex-end",
    },
    cartBtnText: {
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: 20,
    },
});

export default CartPage;
