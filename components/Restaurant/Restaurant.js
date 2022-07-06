import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const Restaurant = ({ restaurant, navigation }) => {
    const [like, setLike] = useState(false);
    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: restaurant.image_url }}
                style={{ width: 300, height: 200, borderRadius: 10 }}
            />
            <Text
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    color: "#FAFAFA",
                    position: "absolute",
                    textAlign: "center",
                    bottom: 60,
                    left: 0,
                    right: 0,
                    fontWeight: "600",
                    fontSize: 25,
                }}
            >
                {restaurant.publisher}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    position: "absolute",
                    bottom: 20,
                    left: 0,
                    right: 0,
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require("../../assets/icons/location.png")}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text
                        style={{
                            color: "#FAFAFA",
                            marginLeft: 5,
                            fontWeight: "600",
                        }}
                    >
                        Oke-Ilewo, Abeokuta
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require("../../assets/icons/clock.png")}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text
                        style={{
                            color: "#FAFAFA",
                            marginLeft: 5,
                            fontWeight: "600",
                        }}
                    >
                        30 minutes
                    </Text>
                </View>
            </View>
            <View
                style={{
                    position: "absolute",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Pressable>
                    <Image source={require("../../assets/icons/star.png")} />
                    <Text>5</Text>
                </Pressable>
                <Pressable onPress={() => setLike(!like)}>
                    <Image
                        source={
                            like
                                ? require("../../assets/icons/heart-filled.png")
                                : require("../../assets/icons/heart.png")
                        }
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        marginHorizontal: 32,
        marginVertical: 15,
        position: "relative",
    },
});
export default Restaurant;
