import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Address from "./screens/Address";
import PaymentCards from "./screens/PaymentCards";
import { Image } from "react-native";

import CustomDrawer from "./components/Drawer/Custom";
import Map from "./screens/Map";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerShown: true,
    drawerActiveBackgroundColor: "#FFFFFF",
    drawerActiveTintColor: "#2A2A2A",
    drawerInactiveTintColor: "#2A2A2A",
};

export default DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName="Home"
            screenOptions={screenOptions}
            hideStatusBar={true}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/icons/home-filled.png")}
                            style={{
                                width: focused ? 20 : 18,
                                height: focused ? 20 : 18,
                            }}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/icons/profile-drawer.png")}
                            style={{
                                width: focused ? 20 : 18,
                                height: focused ? 20 : 18,
                            }}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Address"
                component={Address}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/icons/location-filled.png")}
                            style={{
                                width: focused ? 20 : 18,
                                height: focused ? 20 : 18,
                            }}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="PaymentCards"
                component={PaymentCards}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/icons/payment-card.png")}
                            style={{
                                width: focused ? 20 : 18,
                                height: focused ? 20 : 18,
                            }}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Map"
                component={Map}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/icons/payment-card.png")}
                            style={{
                                width: focused ? 20 : 18,
                                height: focused ? 20 : 18,
                            }}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
};
