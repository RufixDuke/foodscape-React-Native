import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import Snack from "../components/SnackScreen/Snack";
import BottomTabs from "../components/HomeScreen/BottomTabs";
import { Picker } from "@react-native-picker/picker";

const SnackScreen = ({ navigation }) => {
    const [query, setQuery] = useState("");
    const [foods, setFood] = useState([]);
    const fetchingData = () => {
        let url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setFood(recipe.recipes);
                // console.log(recipe.recipes);
            });
    };
    // console.log(foods);
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
                                setQuery(itemValue)
                            }
                        >
                            <Picker.Item label="hamburger" value="hamburger" />
                            <Picker.Item label="chips" value="chips" />
                            <Picker.Item label="toast" value="toast" />
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
                <Pressable onPress={() => fetchingData()}>
                    <Image
                        source={require("../assets/icons/search.png")}
                        style={{ width: 17, height: 17 }}
                    />
                </Pressable>
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
                Snacks
            </Text>

            <ScrollView>
                {foods.map((food) => (
                    <Snack
                        key={food.recipe_id}
                        food={food}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>

            <BottomTabs navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 70,
        flex: 1,
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

export default SnackScreen;
