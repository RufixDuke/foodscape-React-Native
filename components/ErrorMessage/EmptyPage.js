import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const EmptyPage = ({ navigation, title, desc, image }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={image}
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
                {title}
            </Text>
            <Text style={{ color: "#828282", textAlign: "center" }}>
                {desc}
            </Text>
        </View>
    );
};

export default EmptyPage;
