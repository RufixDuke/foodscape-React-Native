import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";

const Filters = ({ navigation }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                // flexDirection: "row",
                marginVertical: 10,
                paddingHorizontal: 20,
                // height: 55,
            }}
        >
            <Pressable
                style={{
                    backgroundColor: "#FCDEC9",
                    marginRight: 12,
                    paddingHorizontal: 24,
                    borderRadius: 10,
                    paddingVertical: 12,
                    flexDirection: "row",
                    // height: 55,
                }}
                onPress={() => navigation.push("FoodScreen")}
            >
                <Image
                    source={require("../../assets/icons/ep_food.png")}
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 6,
                    }}
                />
                <Text style={{ color: "#A74601", fontSize: 14 }}>Foods</Text>
            </Pressable>
            <Pressable
                style={{
                    backgroundColor: "#FCDEC9",
                    marginRight: 12,
                    paddingHorizontal: 24,
                    borderRadius: 10,
                    paddingVertical: 12,
                    flexDirection: "row",
                }}
                onPress={() => navigation.navigate("SnackScreen")}
            >
                <Image
                    source={require("../../assets/icons/fluent_food-pizza-24-regular.png")}
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 6,
                    }}
                />
                <Text style={{ color: "#A74601", fontSize: 14 }}>Snacks</Text>
            </Pressable>
        </ScrollView>
    );
};

export default Filters;
