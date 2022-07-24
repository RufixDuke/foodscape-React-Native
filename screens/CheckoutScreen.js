import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Checkout/Card";

const CheckoutScreen = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 50, backgroundColor: "#F5F5F5" }}>
            <View style={styles.wrapper}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require("../assets/icons/left-arrow.png")} />
                </Pressable>
                <Text style={styles.headerText}>Checkout</Text>
                <Text></Text>
            </View>
            <Text style={styles.label}>Delivery Address</Text>
            <Card
                title="Home"
                details="Oremeji Street, Oshodi/Isolo, Nigeria"
                image={require("../assets/icons/map-address.png")}
            />

            <View style={{ marginTop: 20 }}>
                <Text style={styles.label}>Payment Methods</Text>

                <Card
                    title="MasterCard"
                    details="**** **** **** 7632"
                    image={require("../assets/icons/mastercard.png")}
                />

                <Card
                    title="Cash on Delivery"
                    details="Pay after receiving delivery"
                    image={require("../assets/icons/cash.png")}
                />

                <Card
                    title="Paypal"
                    details="rufixduke@paypal"
                    image={require("../assets/icons/paypal.png")}
                />

                <Card
                    title="Apple pay"
                    details="rufixduke@apple.pay"
                    image={require("../assets/icons/apple-pay.png")}
                />
            </View>

            <View style={styles.subtotal}>
                <Text style={{ color: "#828282", fontWeight: "500" }}>
                    Subtotal
                </Text>
                <Text style={styles.subtotalText}># 1500</Text>
            </View>

            <View style={styles.delivery}>
                <Text style={{ color: "#828282", fontWeight: "500" }}>
                    Delivery
                </Text>
                <Text style={styles.subtotalText}>Free</Text>
            </View>
            <Text style={styles.line}></Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 30,
                }}
            >
                <Text style={{ color: "#828282", fontSize: 18 }}>Total</Text>
                <Text
                    style={{
                        color: "#333333",
                        fontWeight: "600",
                        fontSize: 16,
                    }}
                >
                    # 1500
                </Text>
            </View>

            <Pressable
                style={styles.cartBtn}
                onPress={() => console.log("Order placed....")}
            >
                <Text style={styles.cartBtnText}>Place Order</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 20,
    },
    headerText: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "700",
        color: "#333333",
    },
    label: {
        marginLeft: 30,
        color: "#333333",
        fontSize: 16,
        fontWeight: "600",
    },
    subtotal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        marginHorizontal: 30,
        marginTop: 20,
    },
    subtotalText: {
        color: "#333333",
        fontWeight: "500",
        fontSize: 15,
    },
    delivery: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        marginHorizontal: 30,
    },
    line: {
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: "#E0E0E0",
        marginHorizontal: 30,
    },
    cartBtn: {
        backgroundColor: "#F27C28",
        marginHorizontal: 30,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginTop: 30,
    },
    cartBtnText: {
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: 20,
    },
});
export default CheckoutScreen;
