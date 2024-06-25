import React, { useState } from "react"
import axios from "axios"
import {
    View,
    Text,
    Button,
    SafeAreaView,
    GestureResponderEvent,
    TouchableOpacity,
} from "react-native"
// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/Router"
// types
import { SignUpData } from "../../types"
// Component
import { InputBox } from "../../components"

type EmailProps = NativeStackScreenProps<
    RootStackParamList,
    "EmailVerification"
>

const Email: React.FC<EmailProps> = ({ route, navigation }) => {
    const awsURL = "http://3.106.247.51:8000/userreg/"
    const { username, email, password, verificationCode } = route.params

    const [inputCode, setInputCode] = useState<string>()

    const [signupData, setSignupData] = useState<SignUpData>({
        username: "",
        contact: "",
        password: "",
    })

    const handleClick = (e: GestureResponderEvent) => {
        e.preventDefault()
        if (verificationCode === inputCode) {
            setSignupData({
                username: username,
                contact: email,
                password: password,
            })

            // SignUp
            signUp(signupData)
            console.log(signupData, "signupp")
            console.log("Verification Code Matches")
        } else {
            console.log("Invalid verification code")
        }
    }

    // Signup function
    const signUp = async (data: SignUpData) => {
        try {
            const response = await axios.post(awsURL, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log("Signup successful", response.data)
            navigation.navigate("Login")
        } catch (error) {
            console.log("Signup failed: ", error)
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
                    <Text className="text-ww-white text-center">Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Email
