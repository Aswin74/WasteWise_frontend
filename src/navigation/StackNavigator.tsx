import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/auth/Login"
import SignUp from "../screens/auth/SignUp"

export type RootStackParamList = {
    // for passing any parameters to screen with navigation
    Login: undefined
    SignUp: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigator
