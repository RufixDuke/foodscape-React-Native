import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const Product = () => {
    return (
        <View
            style={{
                backgroundColor: "#FCDEC9",
                marginHorizontal: 20,
                paddingHorizontal: 20,
                paddingVertical: 24,
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 10,
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <Text
                    style={{
                        marginRight: 8,
                        color: "#A74601",
                        fontSize: 20,
                        fontWeight: "900",
                    }}
                >
                    x1
                </Text>
                <View>
                    <Text
                        style={{
                            color: "#A74601",
                            fontSize: 18,
                            fontWeight: "900",
                        }}
                    >
                        Beef Burger
                    </Text>
                    <Text style={{ color: "#F59D5E", fontSize: 14 }}>
                        Sweet Sensation
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <Text
                    style={{
                        color: "#A74601",
                        fontSize: 20,
                        fontWeight: "900",
                    }}
                >
                    # 1500
                </Text>
                <Pressable
                    style={{
                        marginLeft: 15,
                        backgroundColor: "#F3F3F3",
                        padding: 5,
                        borderRadius: 8,
                    }}
                >
                    <Image
                        source={require("../../assets/icons/close-cart.png")}
                        style={{ width: 15, height: 15 }}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default Product;
