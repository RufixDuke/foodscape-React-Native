import {
    View,
    Text,
    TextInput,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import Snack from "../components/SnackScreen/Snack";

const SnackScreen = () => {
    const [query, setQuery] = useState("pizza");
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
    console.log(foods);
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputWrapper}>
                <Image
                    source={require("../assets/icons/left-arrow.png")}
                    style={{ width: 20, height: 17.14 }}
                />

                <View style={styles.inputField}>
                    <TextInput
                        placeholder="Enter your recipe..."
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        keyboardType="default"
                        textContentType="name"
                        // autoFocus={true}
                        onChangeText={(query) => setQuery(query)}
                        // onSubmitEditing={fetchingDatas}
                        value={query}
                    />

                    <Pressable onPress={() => setQuery("")}>
                        <Image
                            source={require("../assets/icons/close.png")}
                            style={{ width: 15, height: 12 }}
                        />
                    </Pressable>
                </View>
                <Pressable onPress={() => fetchingData()}>
                    <Image
                        source={require("../assets/icons/search.png")}
                        style={{ width: 17, height: 17 }}
                    />
                </Pressable>
            </View>

            <ScrollView>
                {foods.map((food) => (
                    <Snack key={food.recipe_id} food={food} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 70,
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
        paddingVertical: 5,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: 200,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default SnackScreen;
