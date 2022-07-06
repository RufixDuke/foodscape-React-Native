import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Restaurant = () => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={require("../../assets/icons/meal.png")}
                style={{ width: 300, height: 200, borderRadius: 10 }}
            />
            <Text
                style={{
                    color: "white",
                    position: "absolute",
                    top: 110,
                    left: 65,
                    fontWeight: "bold",
                    fontSize: 25,
                }}
            >
                Sweet Sensation
            </Text>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={require("../../assets/icons/location.png")}
                    />
                    <Text>Oke-Ilewo, Abeokuta</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require("../../assets/icons/clock.png")} />
                    <Text>30 minutes</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginHorizontal: 32,
        marginVertical: 15,
        position: "relative",
    },
});
export default Restaurant;
