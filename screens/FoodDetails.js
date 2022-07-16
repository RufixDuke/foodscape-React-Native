import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const FoodDetails = ({ navigation }) => {
    const [details, setDetails] = useState({});
    const route = useRoute();
    const { recipeID, price } = route.params;

    const fetchDetails = () => {
        let url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setDetails(recipe.recipe);
            });
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/icons/left-arrow.png")}
                        style={{ marginLeft: 20, width: 24, height: 24 }}
                    />
                </Pressable>

                <Text style={styles.headerTitle}>{details.title}</Text>
                <Text></Text>
            </View>
            <Image
                source={{ uri: details.image_url }}
                style={styles.foodImage}
            />
            <View style={styles.details}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require("../assets/icons/location-filled.png")}
                    />
                    <Text style={styles.detailsText}>{details.publisher}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require("../assets/icons/clock-filled.png")}
                    />
                    <Text style={styles.detailsText}>
                        {(details.social_rank - 10) / 3} minutes
                    </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/icons/distance.png")} />
                    <Text style={styles.detailsText}>
                        {(details.social_rank + 10) / 100} Km
                    </Text>
                </View>
            </View>

            <View style={styles.ingredients}>
                <Text
                    style={{
                        color: "#333333",
                        fontSize: 18,
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: 10,
                        textDecorationLine: "underline",
                    }}
                >
                    Ingredients
                </Text>
                <Text style={styles.ingreDetails}>
                    {details.ingredients.join()}
                </Text>
            </View>

            <View
                style={{
                    marginTop: 40,
                    marginHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={{ color: "#4F4F4F", fontWeight: "600" }}>
                        {(details.recipe_id / 200).toFixed()} g |{" "}
                        {(details.recipe_id / 270).toFixed()} cal
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("../assets/icons/star-filled.png")}
                        style={{ width: 11, height: 11, marginRight: 1 }}
                    />
                    <Text style={{ color: "#4F4F4F", fontWeight: "600" }}>
                        {(details.social_rank / 21).toFixed(1)}(
                        {(details.social_rank + 47).toFixed()})
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FCDEC9",
        paddingTop: 60,
        paddingBottom: 160,
        position: "relative",
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    headerTitle: {
        marginRight: 20,
        color: "#333333",
        fontSize: 20,
        fontWeight: "800",
    },
    foodImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        position: "absolute",
        top: 120,
        left: 80,
    },
    details: {
        marginTop: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
    },
    detailsText: {
        color: "#333333",
        fontWeight: "600",
        fontSize: 14,
    },
    ingredients: {
        marginHorizontal: 20,
    },
    ingreDetails: {
        color: "#4F4F4F",
        lineHeight: 20,
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
    },
});

export default FoodDetails;
