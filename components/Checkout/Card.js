import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { setTaskID } from "../../redux/action";

const Card = ({ image, title, details, navigation }) => {
    return (
        <View>
            <Pressable style={styles.wrapper} onPress={navigation}>
                <Image source={image} />
                <View style={{ marginHorizontal: 10 }}>
                    <Text>{title}</Text>
                    <Text>{details}</Text>
                </View>
                <Image
                    source={require("../../assets/icons/arrow-right.png")}
                    style={{ position: "absolute", right: 7 }}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginHorizontal: 20,
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
