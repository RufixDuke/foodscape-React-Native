import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Pressable,
} from "react-native";
const Popular = ({ data, navigation }) => {
    let rating = (((data.social_rank - 4) / 100) * 5).toFixed(1);
    let price = (data.social_rank.toFixed() / 2).toString();
    let prices = price + "00";
    let numPrice = parseInt(prices);
    return (
        <View style={{ position: "relative", marginRight: 12 }}>
            <Image
                source={{ uri: data.image_url }}
                style={{ width: 140, height: 140, borderRadius: 6 }}
            />
            <TouchableOpacity
                style={{
                    position: "absolute",
                    top: 7,
                    left: 110,
                }}
            >
                <Image
                    source={require("../../assets/icons/heart.png")}
                    style={{
                        width: 24,
                        height: 22,
                    }}
                />
            </TouchableOpacity>
            <View
                style={{
                    position: "absolute",
                    bottom: 3,
                    marginLeft: 6,
                    marginBottom: 5,
                }}
            >
                <Text
                    style={{
                        color: "#FAFAFA",
                        fontSize: 14,
                        fontWeight: "900",
                    }}
                >
                    {data.title.slice(0, 10)}
                </Text>
                <Text
                    style={{
                        color: "#FAFAFA",
                        fontSize: 11,
                        fontWeight: "900",
                    }}
                >
                    N {numPrice}
                </Text>
            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 8,
                    right: 5,
                    flexDirection: "row",
                    backgroundColor: "#F27C28",
                    alignItems: "center",
                    borderRadius: 16,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                }}
            >
                <Image
                    style={{ marginRight: 2, width: 10, height: 10 }}
                    source={require("../../assets/icons/star.png")}
                />
                <Text
                    style={{
                        color: "#FAFAFA",
                        fontSize: 12,
                        fontWeight: "600",
                    }}
                >
                    {rating}
                </Text>
            </View>
        </View>
    );
};

export default Popular;
