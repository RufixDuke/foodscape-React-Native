import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const SweetSensationScreen = () => {
    const [restaurants, setrestaurants] = useState([]);
    // const [filter, setFilter] = useState(restaurants);
    // const [loading, setLoading] = useState(false);
    // let slicedRestaurant = restaurants.slice(0, 10);
    // const fetchingData = () => {
    //     let url = "https://forkify-api.herokuapp.com/api/search?q=bean";
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((recipe) => {
    //             setRestaurants(recipe.recipes);
    //             setFilter(response.json());
    //             setLoading(false);
    //             console.log(recipe.recipes);
    //         });
    // };

    // const filterProduct = (pub) => {
    //     const updatedList = restaurants.filter((x) => x.publisher === pub);
    //     setFilter(updatedList);
    // };

    // useEffect(() => {
    //     fetchingData();
    //     console.log(filterProduct("Closet Cooking"));
    // }, []);

    // const fetchingData = () => {
    //     let url = "https://forkify-api.herokuapp.com/api/search?q=bean";
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((recipe) => {
    //             setrestaurants(recipe.recipes);
    //             // console.log(recipe.recipes);
    //         });
    // };

    // useEffect(() => {
    //     fetchingData();
    // }, []);

    const route = useRoute();

    return (
        <View>
            <Text style={{ color: "black", paddingTop: 100 }}>
                {/* {slicedRestaurant.map((x) => (
                    <Text key={x.recipe_id}>{x}</Text>
                ))} */}
                {route.params.text}
                Heyyy
            </Text>
        </View>
    );
};

export default SweetSensationScreen;
