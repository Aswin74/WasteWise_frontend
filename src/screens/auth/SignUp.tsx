import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    GestureResponderEvent,
} from "react-native"
import Animated, {
    FadeIn,
    FadeInDown,
    FadeInUp,
    FadeOut,
} from "react-native-reanimated"

// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/Router"
// types
import { SignUpInput } from "../../types"

type SignUpProps = NativeStackScreenProps<RootStackParamList, "SignUp">

const SignUp = ({ navigation }: SignUpProps) => {
    const [username, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<any>("")

    const [inputValues, setInputValues] = useState<SignUpInput>({
        username: "",
        email: "",
        password: "",
    })

    // Random Code for verification.
    const [verificationCode, setVerificationCode] = useState<string>("")

    const generateVerificationCode = () => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        let result = ""
        const charslength = chars.length
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * charslength))
        }

        setVerificationCode(result)
    }

    useEffect(() => {
        generateVerificationCode()
    }, [])

    const handleSubmit = (e: GestureResponderEvent) => {
        e.preventDefault()
        setInputValues({
            username: username,
            email: email,
            password: password,
        })

        console.log("code:", verificationCode)

        navigation.navigate("EmailVerification", {
            username,
            email,
            password,
            verificationCode,
        })

        setUserName("")
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        console.log("signup: ", inputValues)
    }, [inputValues])

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 10}
            className="w-full h-full bg-ww-white"
        >
            <StatusBar style="inverted" />
            <ScrollView>
                <Image
                    className="h-full w-full absolute bottom-10"
                    source={require("../../assets/wave.png")}
                />

                {/* Logo and extra icons */}
                <View className="top-28 w-full items-center">
                    <Animated.Image
                        entering={FadeInUp.delay(200)
                            .duration(1000)
                            .springify()
                            .damping(8)}
                        className="h-40 w-40 rounded-full"
                        source={require("../../assets/logo/ww.png")}
                    />
                    {/* <Animated.Text
                        entering={FadeInUp.delay(400)
                            .duration(1000)
                            .springify()}
                        style={{ fontFamily: "Inter-Regular" }}
                        className="p-2 mt-3 font-bold text-ww-white text-4xl tracking-wider"
                    >
                        WasteWise
                    </Animated.Text> */}
                </View>

                {/* SignUp form */}
                <View className="h-full w-full flex pt-40">
                    {/* form */}
                    <Animated.View
                        entering={FadeInUp.delay(600)
                            .duration(1000)
                            .springify()}
                        className="flex items-center mb-5"
                    >
                        <Text className="text-ww-logo font-bold text-3xl tracking-wider">
                            SignUp
                        </Text>
                    </Animated.View>

                    {/* SignUp Form */}
                    <View className="mx-4 space-y-4">
                        <Animated.View
                            entering={FadeInDown.delay(200)
                                .duration(1000)
                                .springify()}
                            className="bg-ww-black/5 rounded-2xl p-4"
                        >
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor={"gray"}
                                value={username}
                                onChangeText={setUserName}
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .duration(1000)
                                .springify()}
                            className="bg-black/5 rounded-2xl p-4"
                        >
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={"gray"}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(400)
                                .duration(1000)
                                .springify()}
                            className="bg-ww-black/5 rounded-2xl p-4 mb-2"
                        >
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={"gray"}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(500)
                                .duration(1000)
                                .springify()}
                            className="w-full"
                        >
                            <TouchableOpacity
                                className="bg-ww-primary w-full rounded-2xl p-3"
                                onPress={handleSubmit}
                            >
                                <Text className="text-ww-white text-xl font-semibold text-center">
                                    SignUp
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(600)
                                .duration(1000)
                                .springify()}
                            className="flex-row justify-center"
                        >
                            <Text className="text-ww-black">
                                Already have an account?{" "}
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("Login")}
                            >
                                <Text className="text-sky-600">Login</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp
