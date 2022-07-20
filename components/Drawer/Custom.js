import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 30,
                    }}
                >
                    <Pressable onPress={() => props.navigation.closeDrawer()}>
                        <Image
                            source={require("../../assets/icons/left-arrow.png")}
                            style={{
                                height: 25,
                                width: 25,
                            }}
                        />
                    </Pressable>

                    <Image
                        source={require("../../assets/shubham-pawar-SanJsOPdLtU-unsplash.jpg")}
                        style={{
                            height: 116,
                            width: 116,
                            borderRadius: 58,
                            marginBottom: 10,
                        }}
                    />
                    <Text style={{ marginLeft: 20 }}></Text>
                </View>
                <View>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 18,
                            marginBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        John Doe
                    </Text>
                </View>
                <View
                    style={{
                        marginHorizontal: 20,
                        backgroundColor: "#FFFFFF",
                        marginTop: 25,
                        borderRadius: 6,
                    }}
                >
                    <View>
                        <DrawerItemList {...props} />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View
                style={{
                    padding: 20,
                    borderTopWidth: 1,
                    borderTopColor: "#ccc",
                }}
            >
                <TouchableOpacity onPress={() => {}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#FFFFFF",
                            paddingLeft: 12,
                            paddingVertical: 16,
                            borderRadius: 6,
                        }}
                    >
                        <Image
                            source={require("../../assets/icons/logout.png")}
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 7,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 5,
                            }}
                        >
                            Log Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
