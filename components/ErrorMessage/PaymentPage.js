import { View, Text, Image } from "react-native";
import React from "react";

const PaymentPage = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: 60,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View>
                <Image
                    source={require("../../assets/icons/credit-card-big.png")}
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
                    No Card available
                </Text>
                <Text style={{ color: "#828282", textAlign: "center" }}>
                    You haven't added any card yet.
                </Text>
            </View>
        </View>
    );
};

export default PaymentPage;
