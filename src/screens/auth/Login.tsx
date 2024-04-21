import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"

function Login() {
    return (
        <View className="w-full h-full bg-white">
            <StatusBar style="inverted" />
            <Image
                className="h-full w-full absolute bottom-10"
                source={require("../../assets/wave.png")}
            />

            {/* Logo and extra icons */}
            <View className="top-28 w-full items-center">
                <Image
                    className="h-20 w-20 rounded-full"
                    source={require("../../assets/WasteWise-Logo.jpg")}
                />
                <Text
                    style={{ fontFamily: "Inter-Regular" }}
                    className="p-2 font-bold text-white text-4xl tracking-wider"
                >
                    WasteWise
                </Text>

                <View className="flex items-center mt-3">
                    <Text className="text-white font-bold text-3xl tracking-wider">
                        Login
                    </Text>
                </View>
            </View>

            {/* login form */}
            <View className="h-full w-full flex pt-44">
                {/* form */}
                <View className="mx-4 space-y-4">
                    <View className="bg-black/5 rounded-2xl p-4">
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={"gray"}
                        />
                    </View>

                    <View className="bg-black/5 rounded-2xl p-4 mb-2">
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={"gray"}
                            secureTextEntry
                        />
                    </View>

                    <View className="w-full">
                        <TouchableOpacity className="bg-sky-500 w-full rounded-2xl p-3">
                            <Text className="text-white text-xl font-semibold text-center">
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row justify-center">
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text className="text-sky-600">SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login
