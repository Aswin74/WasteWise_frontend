import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import axios from "axios"

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
//type
import { LoginInput } from "../../types"
// assets
import { wavebg, ww } from "../../assets"

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">

const Login = ({ navigation }: LoginProps) => {
    const awsURL = "http://3.106.247.51:8000/login/"

    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<any>("")
    const [inputValues, setInputValues] = useState<LoginInput>({
        username: "",
        password: "",
    })

    const handleSubmit = (e: GestureResponderEvent) => {
        e.preventDefault()
        setInputValues({ username: username, password: password })

        login(inputValues)

        setUserName("")
        setPassword("")
    }

    // Login function
    const login = async (data: LoginInput) => {
        try {
            const response = await axios.post(awsURL, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            console.log("Successfull", response.data)
            navigation.navigate("HomeTabs")
        } catch (error) {
            console.log("Failed", error)
        }
    }

    // useEffect(() => {
    //   console.log(inputValues)
    // }, [inputValues])

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 10}
            className="flex-1 bg-ww-white"
        >
            <ScrollView>
                <StatusBar style="inverted" />
                {/* Background Image */}
                <Image className="h-full w-full absolute " source={wavebg} />
                {/* Logo and extra icons */}
                <View className="top-28 w-full items-center pb-6">
                    <Animated.Image
                        entering={FadeInUp.delay(200)
                            .duration(1000)
                            .springify()
                            .damping(8)}
                        className="h-40 w-40 rounded-full"
                        source={ww}
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

                {/* login form */}
                <View className="h-full w-full flex pt-24">
                    {/* form */}
                    <Animated.View
                        entering={FadeInUp.delay(600)
                            .duration(1000)
                            .springify()}
                        className="flex items-center mt-10 mb-5"
                    >
                        <Text className="text-ww-logo font-bold text-3xl tracking-wider">
                            Login
                        </Text>
                    </Animated.View>
                    <View className="mx-4 space-y-4">
                        <Animated.View
                            entering={FadeInDown.delay(200)
                                .duration(1000)
                                .springify()}
                            className="bg-ww-black/5 rounded-2xl p-4"
                        >
                            <TextInput
                                // id="username"
                                value={username}
                                placeholder="Username"
                                placeholderTextColor={"gray"}
                                onChangeText={setUserName}
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .duration(1000)
                                .springify()}
                            className="bg-ww-black/5 rounded-2xl p-4 mb-2"
                        >
                            <TextInput
                                value={password}
                                placeholder="Password"
                                placeholderTextColor={"gray"}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(400)
                                .duration(1000)
                                .springify()}
                            className="w-full"
                        >
                            <TouchableOpacity
                                className="bg-ww-primary w-full rounded-2xl p-3"
                                onPress={handleSubmit}
                            >
                                <Text className="text-ww-white text-xl font-semibold text-center">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(500)
                                .duration(1000)
                                .springify()}
                            className="flex-row justify-center"
                        >
                            <Text className="text-ww-black">
                                Don't have an account?{" "}
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("SignUp")}
                            >
                                <Text className="text-sky-600">Sign Up</Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <TouchableOpacity
                            onPress={() => navigation.push("HomeTabs")}
                        >
                            <Text>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login
