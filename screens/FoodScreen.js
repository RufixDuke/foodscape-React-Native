import {
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import BottomTabs from "../components/HomeScreen/BottomTabs";
import { Picker } from "@react-native-picker/picker";
import EmptyPage from "../components/ErrorMessage/EmptyPage";

const FoodScreen = ({ navigation }) => {
    const [foods, setFoods] = useState([]);
    const [query, setQuery] = useState("");
    const fetchingData = () => {
        let url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setFoods(recipe.recipes);
            })
            .catch((error) => {
                Alert.alert(`Hello User`, error.message);
            });
    };
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputWrapper}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/icons/left-arrow.png")}
                        style={{ width: 20, height: 17.14 }}
                    />
                </Pressable>

                <View style={styles.inputField}>
                    <ScrollView>
                        <Picker
                            selectedValue={query}
                            onValueChange={(itemValue, itemIndex) =>
                                setQuery(
                                    itemValue === "Enter your food...."
                                        ? (itemValue = "pizza")
                                        : itemValue
                                )
                            }
                        >
                            <Picker.Item
                                label="Enter your food...."
                                value="Enter your food...."
                                style={{ color: "#BDBDBD" }}
                            />
                            <Picker.Item label="pizza" value="pizza" />
                            <Picker.Item label="pasta" value="pasta" />
                            <Picker.Item label="bean" value="bean" />
                            <Picker.Item label="chicken" value="chicken" />
                            <Picker.Item label="corn" value="corn" />
                            <Picker.Item label="fish" value="fish" />
                            <Picker.Item label="salad" value="salad" />
                            <Picker.Item label="fries" value="fries" />
                            <Picker.Item label="coconut" value="coconut" />
                            <Picker.Item label="popcorn" value="popcorn" />
                            <Picker.Item label="sushi" value="sushi" />
                            <Picker.Item label="bacon" value="bacon" />
                            <Picker.Item label="cucumber" value="cucumber" />
                            <Picker.Item label="potato" value="potato" />
                            <Picker.Item
                                label="sweet potato"
                                value="sweet potato"
                            />
                            <Picker.Item label="bacon" value="bacon" />
                        </Picker>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={() => fetchingData()}>
                    <Image
                        source={require("../assets/icons/search.png")}
                        style={{ width: 17, height: 17 }}
                    />
                </TouchableOpacity>
            </View>
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
            {foods.length ? (
                <ScrollView>
                    {foods.map((food) => (
                        <Snack
                            key={food.recipe_id}
                            food={food}
                            navigation={navigation}
                        />
                    ))}
                </ScrollView>
            ) : (
                <EmptyPage
                    navigation={navigation}
                    title="No search yet."
                    desc="You haven’t searched for a snack yet."
                    image={require("../assets/icons/rice-big.png")}
                />
            )}
            <BottomTabs navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#F5F5F5",
    },
    inputWrapper: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 30,
    },
    inputField: {
        borderWidth: 0,
        borderRadius: 32,
        backgroundColor: "#FAFAFA",
        paddingHorizontal: 8,
        marginBottom: 10,
        width: 200,
        justifyContent: "space-between",
    },
});

export default FoodScreen;
