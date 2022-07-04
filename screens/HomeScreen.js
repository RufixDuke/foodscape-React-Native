import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import Filters from "../components/HomeScreen/Filters";
import Popular from "../components/HomeScreen/Popular";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text
                    style={{
                        marginTop: 50,
                        fontSize: 18,
                        color: "#2A2A2A",
                        fontWeight: "900",
                    }}
                >
                    Welcome, Awwal
                </Text>
                <Text
                    style={{
                        fontSize: 10,
                        fontWeight: "500",
                        color: "#4F4F4F",
                    }}
                >
                    What do you want to order today?
                </Text>
                <View style={styles.inputWrapper}>
                    <Image
                        source={require("../assets/icons/Group.png")}
                        style={{ width: 21.19, height: 17.14 }}
                    />
                    <Formik
                        initialValues={{ name: "" }}
                        onSubmit={() => {
                            console.log("Yoooooooooooo");
                            // navigation.push("Homescreen");
                        }}
                    >
                        {({
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            values,
                        }) => (
                            <>
                                <View style={styles.inputField}>
                                    <TextInput
                                        placeholder="Enter Recipe..."
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        textContentType="name"
                                        // autoFocus={true}
                                        onChangeText={handleChange("name")}
                                        onBlur={handleBlur("name")}
                                        value={values.name}
                                    />
                                </View>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Pressable>
                                        <Image
                                            source={require("../assets/icons/search.png")}
                                        />
                                    </Pressable>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </View>
                <Filters />
                <Popular navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        paddingHorizontal: 20,
    },
    inputWrapper: {
        // flex: 1,
        marginTop: 24,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    inputField: {
        borderWidth: 0,
        borderRadius: 32,
        backgroundColor: "#FAFAFA",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: 200,
    },
});
export default HomeScreen;
