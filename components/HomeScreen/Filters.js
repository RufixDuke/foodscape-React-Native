import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";

const Filters = ({ navigation }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", marginTop: 24 }}>
                <Pressable
                    style={{
                        backgroundColor: "#FCDEC9",
                        marginRight: 12,
                        paddingHorizontal: 24,
                        borderRadius: 10,
                        paddingVertical: 12,
                        flexDirection: "row",
                    }}
                    onPress={() => navigation.push("RestaurantScreen")}
                >
                    <Image
                        source={require("../../assets/icons/fork.png")}
                        style={{
                            width: 18,
                            height: 18,
                            marginRight: 6,
                        }}
                    />
                    <Text style={{ color: "#A74601", fontSize: 14 }}>
                        Restaurants
                    </Text>
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
                    <Text style={{ color: "#A74601", fontSize: 14 }}>
                        Foods
                    </Text>
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
                >
                    <Image
                        source={require("../../assets/icons/fluent_food-pizza-24-regular.png")}
                        style={{
                            width: 18,
                            height: 18,
                            marginRight: 6,
                        }}
                    />
                    <Text style={{ color: "#A74601", fontSize: 14 }}>
                        Snacks
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Filters;
