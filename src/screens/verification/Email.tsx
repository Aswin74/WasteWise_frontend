import React, { useState } from "react"
import axios from "axios"
import {
  View,
  Text,
  Button,
  SafeAreaView,
  GestureResponderEvent,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/Router"
// types
import { SignUpData } from "../../types"
// Component
import { InputBox } from "../../components"
import { awsURL } from "../auth/Login"

type EmailProps = NativeStackScreenProps<
  RootStackParamList,
  "EmailVerification"
>

const Email: React.FC<EmailProps> = ({ route, navigation }) => {
  const { username, email, password, verificationCode } = route.params

  const [inputCode, setInputCode] = useState<string>()

  const [signupData, setSignupData] = useState<SignUpData>({
    username: "",
    contact: "",
    password: "",
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handleClick = (e: GestureResponderEvent) => {
    // e.preventDefault()
    setLoading(true)

    if (verificationCode === inputCode) {
      // setSignupData({
      //     username: username,
      //     contact: email,
      //     password: password,
      // })

      const data: SignUpData = {
        username: username,
        contact: email,
        password: password,
      }

      // SignUp
      signUp(data)
      console.log(data, "signupp")
      console.log("Verification Code Matches")
    } else {
      setError("Invalid verification code")
      setHasError(true)
      setLoading(false)
    }
  }

  // Signup function
  const signUp = async (data: SignUpData) => {
    try {
      const response = await axios.post(`${awsURL}/userreg/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("Signup successful", response.data)
      navigation.navigate("Login")
    } catch (e) {
      setError(String(e))
      setHasError(true)
      setLoading(false)
    }
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-ww-white p-4">
      <View className="h-56 max-w-md p-4 bg-gray-95 rounded-lg shadow-md">
        <Text className="text-lg font-semibold text-center mb-4">
          Email Verification
        </Text>
        <Text className="text- text-center mb-4">
          Enter the verification code sent to {email}
        </Text>
        <InputBox
          placeholder="Verification Code"
          value={inputCode}
          onChangeText={setInputCode}
        />

        <TouchableOpacity
          onPress={handleClick}
          className="bg-ww-primary p-2 rounded-lg"
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text className="text-ww-white text-center">Submit</Text>
          )}
        </TouchableOpacity>
      </View>
      {hasError && (
        <View>
          <Text className="text-red-500">ERROR Logging in! : {error}</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Email
