import { View, Text, Image, ScrollView } from "react-native";
const Popular = ({ data, navigation }) => {
    let rating = (((data.social_rank - 4) / 100) * 5).toFixed(1);
    let price = (data.social_rank.toFixed() / 2).toString();
    let prices = price + "00";
    let numPrice = parseInt(prices);
    console.log(typeof numPrice);
    return (
        <View style={{ position: "relative", marginRight: 12 }}>
            <Image
                source={{ uri: data.image_url }}
                style={{ width: 140, height: 140, borderRadius: 6 }}
            />
            <Image
                source={require("../../assets/icons/Group.png")}
                style={{
                    position: "absolute",
                    top: 7,
                    left: 113,
                    width: 21,
                    height: 20,
                }}
            />
            <View
                style={{
                    position: "absolute",
                    bottom: 5,
                    marginLeft: 6,
                    marginBottom: 5,
                }}
            >
                <Text style={{ color: "#FAFAFA", fontSize: 14 }}>
                    {data.title.slice(0, 10)}
                </Text>
                <Text
                    style={{
                        color: "#FAFAFA",
                        fontSize: 10,
                        fontWeight: "900",
                    }}
                >
                    N 5000.00
                </Text>
            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 5,
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
                    style={{ marginRight: 2 }}
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
