import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const FoodDetails = () => {
    const [details, setDetails] = useState({});
    const route = useRoute();
    const { recipeID, price } = route.params;

    const fetchDetails = () => {
        let url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setDetails(recipe.recipe);
                console.log(recipe);
            });
    };

    // console.log(details.pu);

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FCDEC9",
                    paddingTop: 60,
                    paddingBottom: 160,
                    position: "relative",
                }}
            >
                <Image source={require("../assets/icons/left-arrow.png")} />
                <Text
                    style={{
                        marginRight: 20,
                        color: "#333333",
                        fontSize: 20,
                        fontWeight: "800",
                    }}
                >
                    {details.title}
                </Text>
                <Text></Text>
            </View>
            <Image
                source={{ uri: details.image_url }}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    flexDirection: "row",
                    justifyContent: "center",
                    position: "absolute",
                    // top: 20,
                }}
            />
        </View>
    );
};

export default FoodDetails;
