import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SwiperScreen from "./screens/SwiperScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPassword from "./screens/ForgotPasswordScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const MyStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="SignUpScreen"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
