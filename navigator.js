import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SwiperScreen from "./screens/SwiperScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPassword from "./screens/ForgotPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import RecentScreen from "./screens/RecentScreen";
import Favorite from "./screens/Favorite";
import Carts from "./screens/Carts";
import Profile from "./screens/Profile";
import FoodScreen from "./screens/FoodScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import SnackScreen from "./screens/SnackScreen";
import FoodDetails from "./screens/FoodDetails";
import CheckoutScreen from "./screens/CheckoutScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const MyStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Carts" screenOptions={screenOptions}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RecentScreen" component={RecentScreen} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Carts" component={Carts} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
            <Stack.Screen
                name="RestaurantScreen"
                component={RestaurantScreen}
            />
            <Stack.Screen name="SnackScreen" component={SnackScreen} />
            <Stack.Screen name="FoodDetails" component={FoodDetails} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
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
