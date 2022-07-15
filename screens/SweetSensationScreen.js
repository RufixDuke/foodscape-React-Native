import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const SweetSensationScreen = () => {
    const route = useRoute();
    const { recipeID, title, publisher } = route.params;

    return (
        <View>
            <Text style={{ color: "black", paddingTop: 100 }}>
                {/* {slicedRestaurant.map((x) => (
                    <Text key={x.recipe_id}>{x}</Text>
                ))} */}
                {title}
                {publisher}
            </Text>
        </View>
    );
};

export default SweetSensationScreen;
