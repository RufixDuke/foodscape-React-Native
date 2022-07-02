import { View, Text, Image } from "react-native";
import React from "react";

const Popular = () => {
    return (
        <View>
            <Text>Popular Products</Text>
            <View style={{ position: "relative" }}>
                <Image
                    source={require("../../assets/icons/meal.png")}
                    style={{ width: 148, height: 148 }}
                />
                <View style={{ position: "absolute", top: 40 }}>
                    <Text>yyy</Text>
                </View>
            </View>
        </View>
    );
};

export default Popular;
