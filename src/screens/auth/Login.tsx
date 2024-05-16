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

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">

const Login = ({ navigation }: LoginProps) => {
    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<any>("")
    // const [inputValues, setInputValues] = useState<LoginInput>({
    //     username: "",
    //     password: "",
    // })

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = e.target
    //     setInputValues((prevState) => ({ ...prevState, [id]: value }))
    //     console.log(inputValues)
    // }

    useEffect(() => {}, [])

    const handleSubmit = (e: GestureResponderEvent) => {
        e.preventDefault()
        console.log("username : ", username, ",password: ", password)
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 10}
            className="flex-1 bg-white"
        >
            <ScrollView>
                <StatusBar style="inverted" />
                {/* Background Image */}
                <Image
                    className="h-full w-full absolute"
                    source={require("../../assets/wave.png")}
                />
                {/* Logo and extra icons */}
                <View className="top-28 w-full items-center pb-6">
                    <Animated.Image
                        entering={FadeInUp.delay(200)
                            .duration(1000)
                            .springify()
                            .damping(8)}
                        className="h-20 w-20 rounded-full"
                        source={require("../../assets/WasteWise-Logo.jpg")}
                    />
                    <Animated.Text
                        entering={FadeInUp.delay(400)
                            .duration(1000)
                            .springify()}
                        style={{ fontFamily: "Inter-Regular" }}
                        className="p-2 mt-3 font-bold text-white text-4xl tracking-wider"
                    >
                        WasteWise
                    </Animated.Text>
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
                        <Text className="text-sky-500 font-bold text-3xl tracking-wider">
                            Login
                        </Text>
                    </Animated.View>
                    <View className="mx-4 space-y-4">
                        <Animated.View
                            entering={FadeInDown.delay(200)
                                .duration(1000)
                                .springify()}
                            className="bg-black/5 rounded-2xl p-4"
                        >
                            <TextInput
                                // id="username"
                                // value={inputValues.username}
                                placeholder="Username"
                                placeholderTextColor={"gray"}
                                onChangeText={setUserName}
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .duration(1000)
                                .springify()}
                            className="bg-black/5 rounded-2xl p-4 mb-2"
                        >
                            <TextInput
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
                                className="bg-sky-500 w-full rounded-2xl p-3"
                                onPress={handleSubmit}
                            >
                                <Text className="text-white text-xl font-semibold text-center">
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
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("SignUp")}
                            >
                                <Text className="text-sky-600">SignUp</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login
