import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const Restaurant = ({ restaurant }) => {
    const [like, setLike] = useState(false);
    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: restaurant.image_url }}
                style={{ width: 300, height: 200, borderRadius: 10 }}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    position: "absolute",
                }}
            >
                <View
                    style={{
                        backgroundColor: "#F27C28",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 4,
                        borderRadius: 16,
                        position: "absolute",
                        left: 10,
                        top: 10,
                    }}
                >
                    <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 10, height: 10 }}
                    />
                    <Text style={{ color: "white", marginLeft: 2 }}>5</Text>
                </View>

                <Pressable
                    style={{ position: "absolute", left: 250, top: 10 }}
                    onPress={() => setLike(!like)}
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={
                            like
                                ? require("../../assets/icons/heart-filled.png")
                                : require("../../assets/icons/heart.png")
                        }
                    />
                </Pressable>
            </View>
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
                // onPress={() =>
                //     navigation.navigate("SweetSensationScreen", {
                //         recipeID: restaurant.recipe_id,
                //         title: restaurant.title,
                //         publisher: restaurant.publisher,
                //     })
                // }
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
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
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
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
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
