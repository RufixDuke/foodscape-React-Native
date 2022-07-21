import { View, Text, Image } from "react-native";
import React from "react";

const AddressPage = () => {
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
                    source={require("../../assets/icons/address-big.png")}
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
                    No Address yet
                </Text>
                <Text style={{ color: "#828282", textAlign: "center" }}>
                    You haven't added an address yet.
                </Text>
            </View>
        </View>
    );
};

export default AddressPage;
