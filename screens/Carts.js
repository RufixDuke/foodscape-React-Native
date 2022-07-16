import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import React from "react";
import { Image } from "react-native";
import Product from "../components/Cart/Product";
import { StyleSheet } from "react-native";
import { useState } from "react";

const Carts = ({ navigation }) => {
    const [query, setQuery] = useState("");
    return (
        <View style={{ paddingTop: 50, backgroundColor: "#F5F5F5" }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 20,
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
                    Cart
                </Text>
                <Text></Text>
            </View>

            <ScrollView style={{ height: 360 }}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ScrollView>

            <View style={styles.inputField}>
                <TextInput
                    placeholder="Enter promo code"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    keyboardType="default"
                    textContentType="name"
                    // autoFocus={true}
                    onChangeText={(query) => setQuery(query)}
                    // onSubmitEditing={fetchingDatas}
                    value={query}
                />

                <Pressable
                    onPress={() => setQuery("")}
                    style={{
                        backgroundColor: "#F59D5E",
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 8,
                    }}
                >
                    <Text>Apply</Text>
                </Pressable>
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text style={{ color: "#828282" }}>Subtotal</Text>
                    <Text
                        style={{
                            color: "#333333",
                            fontWeight: "500",
                            fontSize: 18,
                        }}
                    >
                        # 1500
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text style={{ color: "#828282" }}>Promo Discount</Text>
                    <Text
                        style={{
                            color: "#333333",
                            fontWeight: "500",
                            fontSize: 18,
                        }}
                    >
                        # 250
                    </Text>
                </View>

                <Text
                    style={{
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderColor: "#E0E0E0",
                    }}
                ></Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "#828282", fontSize: 18 }}>
                        Total
                    </Text>
                    <Text
                        style={{
                            color: "#333333",
                            fontWeight: "700",
                            fontSize: 18,
                        }}
                    >
                        # 1500
                    </Text>
                </View>
            </View>

            <Pressable
                style={styles.cartBtn}
                onPress={() => navigation.navigate("CheckoutScreen")}
            >
                <Text style={styles.cartBtnText}>Proceed to Checkout</Text>
            </Pressable>

            <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate("SnackScreen")}
            >
                <Text style={styles.btnText}>Continue Shopping</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 0,
        borderRadius: 8,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: 20,
        paddingLeft: 24,
        paddingRight: 6,
        paddingVertical: 5,
    },
    cartBtn: {
        backgroundColor: "#F27C28",
        marginHorizontal: 20,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginTop: 40,
    },
    cartBtnText: {
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: 20,
    },
    btn: {
        marginHorizontal: 20,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginTop: 10,
        borderColor: "#F27C28",
        borderWidth: 1,
    },
    btnText: {
        textAlign: "center",
        color: "#F27C28",
        fontSize: 20,
    },
});

export default Carts;
