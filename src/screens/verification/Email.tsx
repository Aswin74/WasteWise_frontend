import React, { useState } from "react"
import axios from "axios"
import {
    View,
    Text,
    Button,
    SafeAreaView,
    GestureResponderEvent,
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

            signUp(signupData)
            navigation.navigate("Login")
            console.log("same")
        } else {
            console.log("error code")
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

            console.log("Successful", response.data)
            navigation.navigate("Login")
        } catch (error) {
            console.log("FAILED : ", error)
        }
    }

    return (
        <SafeAreaView className="m-auto">
            <Text>code: {verificationCode}</Text>
            <Text>Username: {username}</Text>
            <Text>email: {email}</Text>
            <Text>password: {password}</Text>
            <InputBox value={inputCode} onChangeText={setInputCode} />
            <Button title="Submit" onPress={handleClick} />
        </SafeAreaView>
    )
}

export default Email
