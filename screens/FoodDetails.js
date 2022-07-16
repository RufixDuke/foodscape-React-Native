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
                // console.log(recipe);
            });
    };

    // console.log(details.pu);

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
                    <Text
                        style={{
                            color: "#333333",
                            fontWeight: "600",
                            fontSize: 14,
                        }}
                    >
                        {details.publisher}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require("../assets/icons/clock-filled.png")}
                    />
                    <Text
                        style={{
                            color: "#333333",
                            fontWeight: "600",
                            fontSize: 14,
                        }}
                    >
                        {(details.social_rank - 10) / 3} minutes
                    </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/icons/distance.png")} />
                    <Text
                        style={{
                            color: "#333333",
                            fontWeight: "600",
                            fontSize: 14,
                        }}
                    >
                        {(details.social_rank - 10) / 3} minutes
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
});

export default FoodDetails;
