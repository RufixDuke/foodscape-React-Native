import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Filters from "./Filters";
import Popular from "./Popular";
import InputForm from "./InputForm";
import SpecialOffers from "./SpecialOffers";
import BottomTabs from "./BottomTabs";

const Overall = ({ navigation }) => {
    const [recipe, setRecipe] = useState([]);
    let slicedRecipe = recipe.slice(0, 4);
    let swiperSliced = recipe.slice(8, 12);
    let specialSliced = recipe.slice(13, 17);
    // console.log(specialSliced);
    const fetchingData = () => {
        let url = "https://forkify-api.herokuapp.com/api/search?q=pizza";
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setRecipe(recipe.recipes);
                // console.log(recipe.recipes);
            });
    };

    useEffect(() => {
        fetchingData();
    }, []);
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text
                    style={{
                        marginTop: 50,
                        fontSize: 18,
                        color: "#2A2A2A",
                        fontWeight: "900",
                    }}
                >
                    Welcome, Awwal
                </Text>
                <Text
                    style={{
                        fontSize: 10,
                        fontWeight: "500",
                        color: "#4F4F4F",
                    }}
                >
                    What do you want to order today?
                </Text>
            </View>
            <InputForm title={"Enter Recipes..."} navigation={navigation} />
            {/* <Pressable onPress={() => navigation.openDrawer()}>
                <Image
                    source={require("../../assets/icons/menu.png")}
                    style={{ width: 21.19, height: 17.14 }}
                />
            </Pressable> */}
            <Filters navigation={navigation} />
            <ScrollView>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <Header navigation={navigation} />
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 1 }}
                    >
                        {slicedRecipe.map((data) => (
                            <Popular
                                navigation={navigation}
                                data={data}
                                key={data.recipe_id}
                            />
                        ))}
                    </ScrollView>
                    <View style={{ marginTop: 17 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#2A2A2A",
                                    fontSize: 18,
                                    marginBottom: 10,
                                    fontWeight: "800",
                                }}
                            >
                                Restaurants near you
                            </Text>

                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "#2A2A2A",
                                }}
                                onPress={() =>
                                    navigation.push("RestaurantScreen")
                                }
                            >
                                See all
                            </Text>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 1 }}
                        >
                            {swiperSliced.map((swiperSlice) => (
                                <SwiperRecipe
                                    swiperSlice={swiperSlice}
                                    key={swiperSlice.recipe_id}
                                />
                            ))}
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: 17 }}>
                        <Text
                            style={{
                                color: "#2A2A2A",
                                fontSize: 18,
                                marginBottom: 10,
                                fontWeight: "800",
                            }}
                        >
                            Special Offers
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 1 }}
                        >
                            {specialSliced.map((data) => (
                                <SpecialOffers
                                    data={data}
                                    key={data.recipe_id}
                                />
                            ))}
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: 17 }}>
                        <Text
                            style={{
                                color: "#2A2A2A",
                                fontSize: 18,
                                marginBottom: 10,
                                fontWeight: "800",
                            }}
                        >
                            Special Offers
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 1 }}
                        >
                            {specialSliced.map((data) => (
                                <SpecialOffers
                                    data={data}
                                    key={data.recipe_id}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

            <BottomTabs navigation={navigation} />
        </View>
    );
};

const SwiperRecipe = ({ swiperSlice }) => (
    <View
        style={{
            position: "relative",
            marginRight: 12,
        }}
    >
        {/* <LinearGradient colors={["#666666", "#1D1D1D"]}> */}
        {/* Uninstall Linear Gradient */}
        <Image
            source={{ uri: swiperSlice.image_url }}
            style={{ width: 140, height: 140, borderRadius: 6 }}
        />
        {/* </LinearGradient> */}
        <Text
            style={{
                position: "absolute",
                bottom: 5,
                backgroundColor: "white",
                // marginBottom: 15,
                borderRadius: 5,
                paddingHorizontal: 8,
                marginHorizontal: 13,
                textAlign: "center",
                color: "#333333",
                fontWeight: "600",
            }}
        >
            {swiperSlice.publisher}
        </Text>
    </View>
);

const Header = ({ navigation }) => (
    <View style={{ marginBottom: 0 }}>
        <View
            style={{
                marginVertical: 10,
                // flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    color: "#2A2A2A",
                    fontWeight: "800",
                }}
            >
                Popular Products
            </Text>
            <Text
                onPress={() => navigation.push("FoodScreen")}
                style={{
                    fontSize: 14,
                    color: "#2A2A2A",
                }}
            >
                See All
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        paddingHorizontal: 20,
    },
    inputWrapper: {
        // flex: 1,
        marginTop: 24,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    inputField: {
        borderWidth: 0,
        borderRadius: 32,
        backgroundColor: "#FAFAFA",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: 200,
    },
});
export default Overall;