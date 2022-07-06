import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const FoodScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View>
                <TouchableOpacity>
                    <Image source={require("../assets/icons/left-arrow.png")} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 50,
    },
});

export default FoodScreen;
