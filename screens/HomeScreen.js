import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import BottomTabs from "../components/HomeScreen/BottomTabs";
import Filters from "../components/HomeScreen/Filters";
import Overall from "../components/HomeScreen/Overall";
import Snack from "../components/SnackScreen/Snack";

const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState("");
    const [foods, setFood] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchingData = () => {
        setLoading(true);
        let url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
        fetch(url)
            .then((response) => response.json())
            .then((recipe) => {
                setFood(recipe.recipes);
                setLoading(false);
                // console.log(recipe.recipes);
            });
    };

    const fetchHandler = () => {
        fetchingData();
    };

    const FetchedPage = () => {
        return (
            <>
                <ScrollView>
                    {foods.map((food) => (
                        <Snack
                            food={food}
                            navigation={navigation}
                            key={food.recipe_id}
                        />
                    ))}
                </ScrollView>
            </>
        );
    };

    return (
        <View style={{ flex: 1 }}>
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
            </View>

            <View style={styles.inputWrapper}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require("../assets/icons/menu.png")}
                        style={{ width: 21.19, height: 17.14 }}
                    />
                </Pressable>

                <View style={styles.inputField}>
                    <TextInput
                        placeholder="Search for your food...."
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        keyboardType="default"
                        textContentType="name"
                        // autoFocus={true}
                        onChangeText={(value) => setQuery(value)}
                        // onSubmitEditing={fetchingDatas}
                        value={query}
                    />
                </View>
                <TouchableOpacity onPress={() => fetchHandler()}>
                    <Image source={require("../assets/icons/search.png")} />
                </TouchableOpacity>
            </View>
            <Filters navigation={navigation} />
            {!loading && query && fetchHandler ? (
                <FetchedPage />
            ) : (
                <Overall navigation={navigation} />
            )}
            <BottomTabs />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
    },
    inputWrapper: {
        // flex: 1,
        marginTop: 24,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
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

{
    /* <Overall navigation={navigation} />; */
}
