import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Card = ({ image, title, details }) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Image source={image} />
                <View style={{ marginHorizontal: 10 }}>
                    <Text>{title}</Text>
                    <Text>{details}</Text>
                </View>
                <Image
                    source={require("../../assets/icons/arrow-right.png")}
                    style={{ position: "absolute", right: 7 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginHorizontal: 30,
        paddingLeft: 8,
        paddingVertical: 13,
        backgroundColor: "#FEFEFE",
        alignItems: "center",
        position: "relative",
        marginTop: 10,
        borderRadius: 6,
    },
});
export default Card;
