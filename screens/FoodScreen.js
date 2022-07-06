import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import InputForm from "../components/FoodScreen/InputForm";
import Cards from "../components/FoodScreen/Cards";

const FoodScreen = ({ navigation }) => {
    const [foods, setFoods] = useState([]);
    const fetchingData = () => {
        let url = "https://forkify-api.herokuapp.com/api/search?q=bean";
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setFoods(recipe.recipes);
                console.log(recipe.recipes);
            });
    };

    useEffect(() => {
        fetchingData();
    }, []);
    return (
        <View style={styles.wrapper}>
            <InputForm navigation={navigation} />
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "700",
                    color: "#333333",
                    marginBottom: 10,
                }}
            >
                Foods
            </Text>
            <ScrollView>
                {foods.map((food) => (
                    <Cards
                        key={food.recipe_id}
                        food={food}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 50,
        backgroundColor: "#F5F5F5",
    },
});

export default FoodScreen;
