import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const Profile = ({ navigation }) => {
    return (
        <View
            style={{
                paddingTop: 60,
                marginHorizontal: 20,
                backgroundColor: "#F5F5F5",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/icons/left-arrow.png")}
                        style={{ width: 20, height: 17.14 }}
                    />
                </Pressable>
                <Text
                    style={{
                        marginRight: 15,
                        color: "#333333",
                        fontSize: 20,
                        fontWeight: "800",
                    }}
                >
                    Personal Info
                </Text>
                <Text></Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 40,
                    justifyContent: "space-between",
                }}
            >
                <Text></Text>
                <Image
                    source={require("../assets/shubham-pawar-SanJsOPdLtU-unsplash.jpg")}
                    style={{
                        height: 116,
                        width: 116,
                        borderRadius: 58,
                        marginBottom: 10,
                    }}
                />
                <Text></Text>
            </View>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#F8BE94" : "#FCDEC9",
                    },
                    styles.btn,
                ]}
            >
                <Text style={{ textAlign: "center", color: "#F27C28" }}>
                    Change
                </Text>
            </Pressable>

            <View
                style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 6,
                    marginTop: 30,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#F2F4F5",
                    }}
                >
                    <Text style={{ color: "#828282" }}>First Name</Text>
                    <Text>John</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#F2F4F5",
                    }}
                >
                    <Text style={{ color: "#828282" }}>Last Name</Text>
                    <Text>John</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#F2F4F5",
                    }}
                >
                    <Text style={{ color: "#828282" }}>Email</Text>
                    <Text>Johndoe@gmail.com</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#F2F4F5",
                    }}
                >
                    <Text style={{ color: "#828282" }}>Phone Number</Text>
                    <Text>+1 9765 222 87</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#F2F4F5",
                    }}
                >
                    <Text style={{ color: "#828282" }}>Password</Text>
                    <Text>**********</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        marginHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 50,
    },
});

export default Profile;
