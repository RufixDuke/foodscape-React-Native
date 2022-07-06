import {
    View,
    Text,
    Image,
    Pressable,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";

const Cards = () => {
    const [fav, setFav] = useState(false);

    const onClick = () => {
        setFav(!fav);
        console.log("Clicked.....");
    };
    return (
        <View style={styles.wrapper}>
            <Image
                source={require("../../assets/favicon.png")}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            />
            <View style={styles.details}>
                <TouchableOpacity onPress={onClick}>
                    <Image
                        source={
                            fav
                                ? require("../../assets/icons/heart-filled.png")
                                : require("../../assets/icons/heart.png")
                        }
                        style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: 20,
                            height: 19,
                        }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        color: "#F27C28",
                        fontSize: 18,
                        fontWeight: "900",
                    }}
                >
                    Fried Rice
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Rolls, beef steak mince, olive oil, ketchup, egg
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
                        <Pressable style={{ marginRight: 5 }}>
                            <Image
                                source={require("../../assets/icons/minus.png")}
                                style={{ width: 27, height: 26 }}
                            />
                        </Pressable>
                        <Text> 1 </Text>
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
                        <Text>Order</Text>
                    </Pressable>
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
        paddingHorizontal: 15,
        borderRadius: 10,
        position: "relative",
    },
    details: {
        marginHorizontal: 18,
        position: "relative",
    },
    btns: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Cards;
