import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
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
                                        ? (itemValue = "hamburger")
                                        : itemValue
                                )
                            }
                        >
                            <Picker.Item
                                label="Enter your food...."
                                value="Enter your food...."
                                style={{ color: "#BDBDBD" }}
                            />
                            <Picker.Item label="hamburger" value="hamburger" />
                            <Picker.Item label="chips" value="chips" />
                            <Picker.Item label="toast" value="toast" />
                            <Picker.Item label="pie" value="pie" />
                            <Picker.Item label="cake" value="cake" />
                            <Picker.Item label="bbq" value="bbq" />
                            <Picker.Item label="sausage" value="sausage" />
                            <Picker.Item label="fries" value="fries" />
                            <Picker.Item label="masala" value="masala" />
                            <Picker.Item label="chocolate" value="chocolate" />
                            <Picker.Item label="ice cream" value="ice cream" />
                            <Picker.Item label="ketchup" value="ketchup" />
                            <Picker.Item
                                label="watermelon"
                                value="watermelon"
                            />
                            <Picker.Item label="pudding" value="pudding" />
                            <Picker.Item label="tacos" value="tacos" />
                            <Picker.Item label="masala" value="masala" />
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
