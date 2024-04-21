import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/auth/Login"
import SignUp from "../screens/auth/SignUp"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigator
