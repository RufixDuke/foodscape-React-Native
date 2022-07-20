import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SwiperScreen from "./screens/SwiperScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPassword from "./screens/ForgotPasswordScreen";
<<<<<<< HEAD
// import HomeScreen from "./screens/HomeScreen";
=======
import HomeScreen from "./screens/HomeScreen";
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e
import RecentScreen from "./screens/RecentScreen";
import Favorite from "./screens/Favorite";
import Carts from "./screens/Carts";
import Profile from "./screens/Profile";
import FoodScreen from "./screens/FoodScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import SnackScreen from "./screens/SnackScreen";
import FoodDetails from "./screens/FoodDetails";
import CheckoutScreen from "./screens/CheckoutScreen";
<<<<<<< HEAD
import Address from "./screens/Address";
import PaymentCards from "./screens/PaymentCards";

import DrawerNavigator from "./drawerNav";
=======
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const MyStack = () => (
    <NavigationContainer>
<<<<<<< HEAD
        <Stack.Navigator
            initialRouteName="SnackScreen"
            screenOptions={screenOptions}
        >
=======
        <Stack.Navigator initialRouteName="Carts" screenOptions={screenOptions}>
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
<<<<<<< HEAD
            <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
            <Stack.Screen name="RecentScreen" component={RecentScreen} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Carts" component={Carts} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
=======
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RecentScreen" component={RecentScreen} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Carts" component={Carts} />
            <Stack.Screen name="Profile" component={Profile} />
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
            <Stack.Screen
                name="RestaurantScreen"
                component={RestaurantScreen}
            />
            <Stack.Screen name="SnackScreen" component={SnackScreen} />
            <Stack.Screen name="FoodDetails" component={FoodDetails} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
<<<<<<< HEAD
            {/* <Stack.Screen name="Address" component={Address} /> */}
            {/* <Stack.Screen name="PaymentCards" component={PaymentCards} /> */}
=======
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e
        </Stack.Navigator>
    </NavigationContainer>
);

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LoginForm"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="SignUpForm" component={SignUpForm} />
        </Stack.Navigator>
    </NavigationContainer>
);
<<<<<<< HEAD

// export const TabNavigator = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={{
//                     headerShown: false,
//                     tabBarShowLabel: false,
//                     tabBarStyle: { backgroundColor: "#AD40AF" },
//                     tabBarInactiveTintColor: "#fff",
//                     tabBarActiveTintColor: "yellow",
//                 }}
//             >
//                 <Tab.Screen name="Home2" component={MyStack} />
//                 <Tab.Screen name="Cart" component={Carts} />
//                 <Tab.Screen name="Favorite" component={Favorite} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// };
=======
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e
