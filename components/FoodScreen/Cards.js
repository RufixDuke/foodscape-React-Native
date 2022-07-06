import {
    View,
    Text,
    Image,
    Pressable,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";

const Cards = ({ food, navigation }) => {
    const [fav, setFav] = useState(false);

    const onClick = () => {
        setFav(!fav);
        console.log("Clicked.....");
    };
    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: food.image_url }}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    // marginLeft: 0,
                }}
            />
            <View>
                <View style={styles.details}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // alignItems: "center",
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
                            onPress={onClick}
                            style={{ marginRight: 20 }}
                        >
                            <Image
                                source={
                                    fav
                                        ? require("../../assets/icons/heart-filled.png")
                                        : require("../../assets/icons/heart.png")
                                }
                                style={{
                                    position: "absolute",
                                    width: 20,
                                    height: 19,
                                }}
                            />
                        </Pressable>
                    </View>

                    <Text style={{ fontSize: 16 }}>
                        {food.title.slice(0, 27) + "..."}
                    </Text>
                    <Text
                        style={{
                            color: "#2A2A2A",
                            fontSize: 18,
                            fontWeight: "900",
                        }}
                    >
                        # 1500
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
                            <Pressable style={{ marginLeft: 5 }}>
                                <Image
                                    source={require("../../assets/icons/plus.png")}
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
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        marginHorizontal: 22,
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderRadius: 10,
        position: "relative",
        marginVertical: 10,
    },
    details: {
        marginLeft: 0,
        position: "relative",
    },
    btns: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Cards;
