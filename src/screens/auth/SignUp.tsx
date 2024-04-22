import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import Animated, {
    FadeIn,
    FadeInDown,
    FadeInUp,
    FadeOut,
} from "react-native-reanimated"

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
                <Animated.Image
                    entering={FadeInUp.delay(200)
                        .duration(1000)
                        .springify()
                        .damping(8)}
                    className="h-20 w-20 rounded-full"
                    source={require("../../assets/WasteWise-Logo.jpg")}
                />
                <Animated.Text
                    entering={FadeInUp.delay(400).duration(1000).springify()}
                    style={{ fontFamily: "Inter-Regular" }}
                    className="p-2 font-bold text-white text-4xl tracking-wider"
                >
                    WasteWise
                </Animated.Text>

                <Animated.View
                    entering={FadeInUp.delay(600).duration(1000).springify()}
                    className="flex items-center mt-3"
                >
                    <Text className="text-white font-bold text-3xl tracking-wider">
                        SignUp
                    </Text>
                </Animated.View>
            </View>

            {/* login form */}
            <View className="h-full w-full flex pt-44">
                {/* form */}
                <View className="mx-4 space-y-4">
                    <Animated.View
                        entering={FadeInDown.delay(200)
                            .duration(1000)
                            .springify()}
                        className="bg-black/5 rounded-2xl p-4"
                    >
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={"gray"}
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
                        />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(400)
                            .duration(1000)
                            .springify()}
                        className="bg-black/5 rounded-2xl p-4 mb-2"
                    >
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={"gray"}
                            secureTextEntry
                        />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(500)
                            .duration(1000)
                            .springify()}
                        className="w-full"
                    >
                        <TouchableOpacity className="bg-sky-500 w-full rounded-2xl p-3">
                            <Text className="text-white text-xl font-semibold text-center">
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
                        <Text>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text className="text-sky-600">Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default Login
