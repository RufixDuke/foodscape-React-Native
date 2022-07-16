import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

const Cards = ({ food, navigation }) => {
    const [fav, setFav] = useState(false);

    let price = parseInt(food.social_rank.toFixed().toString() + "0") * 5;

    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: food.image_url }}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 91,
                    height: 91,
                    borderRadius: 45.5,
                }}
            />
            <View>
                <View style={styles.details}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            position: "relative",
                        }}
                    >
                        <Text
                            style={{
                                color: "#F27C28",
                                fontSize: 18,
                                fontWeight: "900",
                            }}
                        >
                            {food.publisher.slice(0, 15) + "..."}
                        </Text>
                        <Pressable
                            onPress={() => setFav(!fav)}
                            style={{ marginRight: 28 }}
                        >
                            <Image
                                source={
                                    fav
                                        ? require("../../assets/icons/heart-filled.png")
                                        : require("../../assets/icons/heart.png")
                                }
                                style={{
                                    position: "absolute",
                                    width: 24,
                                    height: 19,
                                }}
                            />
                        </Pressable>
                    </View>

                    <Text style={{ fontSize: 12, marginTop: 7 }}>
                        {food.title.slice(0, 33) + "..."}
                    </Text>
                    <Text
                        style={{
                            color: "#2A2A2A",
                            fontSize: 18,
                            fontWeight: "900",
                            marginTop: 7,
                        }}
                    >
                        #{price}
                    </Text>

                    <View style={styles.btns}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Pressable
                                style={{ marginRight: 5 }}
                                onPress={() => console.log("Addition....")}
                            >
                                <Image
                                    source={require("../../assets/icons/minus.png")}
                                    style={{ width: 27, height: 26 }}
                                />
                            </Pressable>
                            <Text style={{ fontWeight: "700" }}> 1 </Text>
                            <Pressable
                                style={{
                                    marginLeft: 5,
                                    backgroundColor: "#FDFDFD",
                                    padding: 8,
                                    borderRadius: 6,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/plus-filled.png")}
                                    style={{ width: 27, height: 26 }}
                                />
                            </Pressable>
                        </View>

                        <Pressable
                            style={{
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                backgroundColor: "#F27C28",
                                paddingHorizontal: 18,
                                paddingVertical: 10,
                                borderRadius: 8,
                            }}
                            onPress={() => console.log("Ordered.....")}
                        >
                            <Text
                                style={{
                                    color: "#FAFAFA",
                                    fontWeight: "700",
                                    fontSize: 15,
                                }}
                            >
                                Order
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        marginHorizontal: 22,
        paddingVertical: 20,
        borderRadius: 10,
        position: "relative",
        marginVertical: 10,
        paddingLeft: 10,
        paddingRight: 25,
    },
    details: {
        marginLeft: 20,
        position: "relative",
        width: 180,
    },
    btns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});

export default Cards;
