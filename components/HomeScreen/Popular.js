import { View, Text, Image, ScrollView } from "react-native";
const Popular = ({ data, navigation }) => {
    // console.log("yooooooooooo");
    return (
        <View style={{ position: "relative", marginRight: 12 }}>
            <Image
                source={{ uri: data.image_url }}
                style={{ width: 148, height: 148, borderRadius: 6 }}
            />
            <Image
                source={require("../../assets/icons/Group.png")}
                style={{
                    position: "absolute",
                    top: 7,
                    left: 120,
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
                <Text style={{ color: "#FAFAFA", fontSize: 12 }}>
                    {data.title}
                </Text>
                <Text
                    style={{
                        color: "#FAFAFA",
                        fontSize: 10,
                        fontWeight: "700",
                    }}
                >
                    N 5000.00
                </Text>
            </View>
        </View>
    );
};

export default Popular;
