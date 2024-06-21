import { View, Text } from "react-native"
import React from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/Router"
import { SafeAreaView } from "react-native-safe-area-context"

type EmailProps = NativeStackScreenProps<
    RootStackParamList,
    "EmailVerification"
>

const Email: React.FC<EmailProps> = ({ route, navigation }) => {
    const { username, email, password, verificationCode } = route.params

    return (
        <SafeAreaView className="m-auto">
            <Text>code: {verificationCode}</Text>
            <Text>Username: {username}</Text>
            <Text>email: {email}</Text>
            <Text>password: {password}</Text>
        </SafeAreaView>
    )
}

export default Email
