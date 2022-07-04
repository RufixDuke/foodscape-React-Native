import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";

const Popular = () => {
    const fetchingData = () => {
        let url = "https://forkify-api.herokuapp.com/api/search?q=pizza";
        let recipe;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                console.log(recipe.recipes.publisher);
            });
    };

    useEffect(() => {
        fetchingData();
    }, []);
    return (
        <View style={{ marginVertical: 20 }}>
            <View
                style={{
                    marginVertical: 10,
                    // flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: "#2A2A2A",
                    }}
                >
                    Popular Products
                </Text>
                <Text
                    // onPress={() => navigation.push('')}
                    style={{
                        fontSize: 14,
                        color: "#2A2A2A",
                    }}
                >
                    See All
                </Text>
            </View>

            <View style={{ position: "relative" }}>
                <Image
                    source={require("../../assets/icons/meal.png")}
                    style={{ width: 148, height: 148 }}
                />
                <Image
                    source={require("../../assets/icons/Group.png")}
                    style={{
                        position: "absolute",
                        top: 7,
                        left: 120,
                        width: 21,
                        height: 20,
                    }}
                />
                <View
                    style={{
                        position: "absolute",
                        bottom: 5,
                        marginLeft: 6,
                        marginBottom: 5,
                    }}
                >
                    <Text style={{ color: "#FAFAFA", fontSize: 12 }}>
                        Chicken Pizza
                    </Text>
                    <Text
                        style={{
                            color: "#FAFAFA",
                            fontSize: 10,
                            fontWeight: "700",
                        }}
                    >
                        N 5000.00
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Popular;
