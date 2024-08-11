import { Alert, BackHandler } from "react-native"
import { useEffect, useState } from "react"
import NetInfo from "@react-native-community/netinfo"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "../screens/auth/Login"
import SignUp from "../screens/auth/SignUp"
import TabNavigator from "./TabNavigator"
import Email from "../screens/verification/Email"

export type RootStackParamList = {
  // for passing any parameters to screen with navigation
  Login: undefined
  SignUp: undefined
  HomeTabs: {
    username: string
    role: string
  }
  EmailVerification: {
    username: string
    email: string
    password: string
    verificationCode: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  const [connected, setConnected] = useState<boolean>(false)
  let currentAlert: any
  let dataWasOffline = false

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected === false) {
        setConnected(false)
        dataWasOffline = true
        currentAlert = Alert.alert(
          "Network Connection Required!",
          "Turn on your mobile data/Wifi",
          [
            {
              text: "Exit",
              onPress: () => BackHandler.exitApp(),
            },
          ]
        )
      } else if (state.isConnected === true) {
        setConnected(true)
        {
          dataWasOffline &&
            (currentAlert = Alert.alert("Data Connected", "Device Online", [
              {
                text: "Close",
                style: "cancel",
              },
            ]))
        }
      } else {
        setConnected(false)
        currentAlert = Alert.alert("New Error")
      }
    })

    return unsubscribe
  }, [])

  //   if (!connected) {
  //     return <NoInternetscreen />
  //   }

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
        options={{
          headerShown: true,
          title: "Verify",
          headerTintColor: "#5ce1e6",
          headerStyle: {
            backgroundColor: "#323650",
          },
        }}
        component={Email}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
