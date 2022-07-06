import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import InputForm from "../components/FoodScreen/InputForm";
import Cards from "../components/FoodScreen/Cards";

const FoodScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <InputForm />
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "700",
                    color: "#333333",
                }}
            >
                Foods
            </Text>
            <Cards />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 50,
        backgroundColor: "#F5F5F5",
    },
});

export default FoodScreen;
