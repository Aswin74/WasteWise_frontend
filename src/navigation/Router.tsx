import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/auth/Login"
import SignUp from "../screens/auth/SignUp"
import TabNavigator from "./TabNavigator"
import Email from "../screens/verification/Email"

export type RootStackParamList = {
    // for passing any parameters to screen with navigation
    Login: undefined
    SignUp: undefined
    HomeTabs: undefined
    EmailVerification: {
        username: string
        email: string
        password: string
        verificationCode: string
    }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            {/* Home Tabs */}
            <Stack.Screen name="HomeTabs" component={TabNavigator} />

            {/* Authetication */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />

            {/* Verification */}
            <Stack.Screen
                name="EmailVerification"
                options={{ headerShown: true, title: "Verify" }}
                component={Email}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator
