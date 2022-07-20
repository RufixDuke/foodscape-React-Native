import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Carts from "./screens/Carts";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Address from "./screens/Address";
import PaymentCards from "./screens/PaymentCards";
import { Image } from "react-native";

import CustomDrawer from "./components/Drawer/Custom";

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
            initialRouteName="Address"
            screenOptions={screenOptions}
            hideStatusBar={true}
            // drawerStyle={{ backgroundColor: "red", width: 100 }}
        >
            <Drawer.Screen
                name="HomeScreen2"
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
                }}
            />
        </Drawer.Navigator>
    );
};
