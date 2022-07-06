import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import InputForm from "../components/FoodScreen/InputForm";
import Restaurant from "../components/Restaurant/Restaurant";

const RestaurantScreen = ({ navigation }) => {
    const [restaurants, setrestaurants] = useState([]);
    let slicedRestaurant = restaurants.slice(0, 10);
    const fetchingData = () => {
        let url = "https://forkify-api.herokuapp.com/api/search?q=bean";
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setrestaurants(recipe.recipes);
                // console.log(recipe.recipes);
            });
    };

    useEffect(() => {
        fetchingData();
    }, []);
    return (
        <View style={styles.wrapper}>
            <View>
                <InputForm
                    navigation={navigation}
                    title={"Enter Restaurant..."}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 22,
                        fontWeight: "700",
                    }}
                >
                    Restaurants
                </Text>
            </View>
            <ScrollView>
                {slicedRestaurant.map((restaurant) => (
                    <Restaurant
                        restaurant={restaurant}
                        navigation={navigation}
                        key={restaurant.recipe_id}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#F5F5F5",
    },
});

export default RestaurantScreen;
