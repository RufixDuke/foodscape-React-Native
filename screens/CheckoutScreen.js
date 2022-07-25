import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import React from "react";
import Card from "../components/Checkout/Card";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

const CheckoutScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const { total } = route.params;
    let delivery = 500;

    const alertMessage = () => {
        setLoading(true);
        setTimeout(() => {
            Alert.alert("Yay!!🎉🎉", "Order placed successfully!!!");
            setLoading(false);
        }, 3000);
    };

    const Loading = () => <ActivityIndicator size="small" />;
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
                navigation={() => navigation.push("Address")}
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
                <Text style={styles.subtotalText}># {total}</Text>
            </View>

            <View style={styles.delivery}>
                <Text style={{ color: "#828282", fontWeight: "500" }}>
                    Delivery
                </Text>
                <Text style={styles.subtotalText}>{delivery}</Text>
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
                    # {total + delivery}
                </Text>
            </View>

            <Pressable
                style={styles.cartBtn(loading)}
                onPress={() => alertMessage()}
            >
                <Text style={styles.cartBtnText}>
                    {loading ? <Loading /> : "Place Order"}
                </Text>
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
    cartBtn: (loading) => ({
        backgroundColor: loading ? "#E0E0E0" : "#F27C28",
        marginHorizontal: 30,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginTop: 30,
    }),
    cartBtnText: {
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: 20,
    },
});
export default CheckoutScreen;
