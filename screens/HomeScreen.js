import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import Filters from "../components/HomeScreen/Filters";
import Popular from "../components/HomeScreen/Popular";
import Swiper from "react-native-swiper";

const HomeScreen = ({ navigation }) => {
    const [recipe, setRecipe] = useState([]);
    let slicedRecipe = recipe.slice(0, 4);
    let swiperSliced = recipe.slice(6, 10);
    // console.log(swiperSliced);
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
                <View style={styles.inputWrapper}>
                    <Image
                        source={require("../assets/icons/Group.png")}
                        style={{ width: 21.19, height: 17.14 }}
                    />
                    <Formik
                        initialValues={{ name: "" }}
                        onSubmit={() => {
                            console.log("Yoooooooooooo");
                            // navigation.push("Homescreen");
                        }}
                    >
                        {({
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            values,
                        }) => (
                            <>
                                <View style={styles.inputField}>
                                    <TextInput
                                        placeholder="Enter Recipe..."
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        textContentType="name"
                                        // autoFocus={true}
                                        onChangeText={handleChange("name")}
                                        onBlur={handleBlur("name")}
                                        value={values.name}
                                    />
                                </View>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Pressable>
                                        <Image
                                            source={require("../assets/icons/search.png")}
                                        />
                                    </Pressable>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </View>
                <Filters />
                <Header />
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
                {/* <SwiperRecipe /> */}
                <Swiper loop={false} index={0}>
                    {swiperSliced.map((swiperSlice) => (
                        <SwiperRecipe
                            swiperSlice={swiperSlice}
                            key={swiperSlice.recipe_id}
                        />
                    ))}
                </Swiper>
            </View>
        </View>
    );
};

const SwiperRecipe = ({ swiperSlice }) => (
    <View>
        <Image
            source={{ uri: swiperSlice.image_url }}
            style={{ width: 150, height: 130 }}
        />
        <Text>Hello</Text>
    </View>
);

const Header = () => (
    <View style={{ marginVertical: 10, marginBottom: 0 }}>
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
                }}
            >
                Popular Products
            </Text>
            <Text
                // onPress={() => navigation.push('')}
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
export default HomeScreen;
