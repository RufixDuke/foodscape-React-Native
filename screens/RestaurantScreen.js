import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputForm from "../components/FoodScreen/InputForm";
import Restaurant from "../components/Restaurant/Restaurant";

const RestaurantScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <InputForm title={"Enter Restaurant..."} />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 22,
                        fontWeight: "700",
                    }}
                >
                    Restaurants
                </Text>
            </View>
            <Restaurant />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#F5F5F5",
    },
});

export default RestaurantScreen;
