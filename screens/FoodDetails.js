import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addItem, setItemID } from "../redux/action/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FoodDetails = ({ navigation }) => {
    const [details, setDetails] = useState({});
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    const { recipeID, price, title, publisher, social, image } = route.params;

    const { cart, itemID } = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity === 1) return false;
        setQuantity(quantity - 1);
    };

    const fetchDetails = () => {
        let url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setDetails(recipe.recipe);
            })
            .catch((error) => {
                Alert.alert(`Hello User`, error.message);
            });
    };
    let newPrice = price === "NaN" ? (newPrice = 2500.0) : price;
    let newRecipeID =
        typeof recipeID === "string" ? (newRecipeID = 54729) : recipeID;

    let newPrices = (parseInt(newPrice) * quantity).toFixed(2);
    console.log(typeof newPrices);

    const setTask = () => {
        var Cart = {
            ID: itemID,
            Title: title,
            Desc: publisher,
            Price: parseInt(newPrices),
            Quantity: quantity,
        };
        const index = cart.findIndex((car) => car.ID === itemID);
        let newCart = [];
        if (index > -1) {
            newCart = [...cart];
            newCart[index] = Cart;
        } else {
            newCart = [...cart, Cart];
        }
        AsyncStorage.setItem("Cart", JSON.stringify(newCart)).then(() => {
            dispatch(addItem(newCart));
            Alert.alert("Success!", "Item saved successfully.");
        });
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    const handleCarts = () => {
        if (cartBtn === "Add to Cart") {
            setTask();
            dispatch(setItemID(cart.length + 1));
            setCartBtn("Remove from Cart");
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/icons/left-arrow.png")}
                        style={{ marginLeft: 20, width: 24, height: 24 }}
                    />
                </Pressable>

                <Text style={styles.headerTitle}>{title}</Text>
                <Text></Text>
            </View>
            <Image source={{ uri: image }} style={styles.foodImage} />
            <ScrollView>
                <View style={styles.details}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Image
                            source={require("../assets/icons/location-filled.png")}
                        />
                        <Text style={styles.detailsText}>{publisher}</Text>
                    </View>

                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Image
                            source={require("../assets/icons/clock-filled.png")}
                        />
                        <Text style={styles.detailsText}>
                            {((social - 10) / 3).toFixed()} minutes
                        </Text>
                    </View>

                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Image
                            source={require("../assets/icons/distance.png")}
                        />
                        <Text style={styles.detailsText}>
                            {((social + 10) / 100).toFixed(1)} Km
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
                        {details.ingredients}
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
                        <Text
                            style={{
                                color: "#4F4F4F",
                                fontWeight: "600",
                                fontSize: 15,
                            }}
                        >
                            {(newRecipeID / 200).toFixed()} g |{" "}
                            {(newRecipeID / 270).toFixed()} cal
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
                        <Text
                            style={{
                                color: "#4F4F4F",
                                fontWeight: "600",
                                fontSize: 15,
                            }}
                        >
                            {(social / 21).toFixed(1)}({(social + 47).toFixed()}
                            )
                        </Text>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Pressable
                            style={styles.btn}
                            onPress={() => {
                                decrement();
                            }}
                        >
                            <Image
                                source={require("../assets/icons/minus-filled.png")}
                                style={{ width: 15, height: 15 }}
                            />
                        </Pressable>
                        <Text style={{ fontWeight: "700" }}> {quantity} </Text>
                        <Pressable
                            style={styles.btn}
                            onPress={() => increment()}
                        >
                            <Image
                                source={require("../assets/icons/plus-filled.png")}
                                style={{ width: 15, height: 15 }}
                            />
                        </Pressable>
                    </View>

                    <Text style={styles.priceText}>#{newPrice * quantity}</Text>
                </View>

                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? "#F8BE94" : "#F27C28" },
                        styles.cartBtn,
                    ]}
                    onPress={() => handleCarts()}
                >
                    <Text style={styles.cartBtnText}>{cartBtn}</Text>
                </Pressable>
            </ScrollView>
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
    btn: {
        marginLeft: 5,
        backgroundColor: "#FDFDFD",
        padding: 8,
        borderRadius: 6,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 30,
    },
    priceText: {
        color: "#A74601",
        fontWeight: "900",
        fontSize: 24,
    },
    cartBtn: {
        marginHorizontal: 20,
        paddingHorizontal: 70,
        paddingVertical: 16,
        borderRadius: 32,
        marginVertical: 40,
    },
    cartBtnText: {
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: 20,
    },
});

export default FoodDetails;
