import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native"
import { Ionicons } from "@expo/vector-icons" // You can use any icon library

const EditProfile = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleSaveChanges = () => {
        // Logic to save the updated profile details
        console.log("Profile updated")
    }

    return (
        <SafeAreaView className="flex-1 p-4 bg-gray-100">
            <View className="items-center mb-6">
                <Ionicons name="person-circle-outline" size={96} color="gray" />
            </View>
            <View className="mb-4">
                <Text className="text-lg font-bold text- mb-1 ">NAME</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    className="border-b-2 border-gray-300 pb-2"
                />
            </View>
            <View className="mb-4">
                <Text className="text-lg mb-1 font-bold text-ww-black">
                    EMAIL
                </Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    className="border-b-2 border-gray-300 pb-2"
                    keyboardType="email-address"
                />
            </View>
            <View className="mb-4">
                <Text className="text-lg font-bold mb-1">PHONE NUMBER</Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    className="border-b-2 border-gray-300 pb-2"
                    keyboardType="phone-pad"
                />
            </View>
            <View className="mb-4">
                <Text className="text-lg font-bold mb-1">LOCATION</Text>
                <TextInput
                    value={location}
                    onChangeText={setLocation}
                    className="border-b-2 border-gray-300 pb-2"
                />
            </View>
            <View className="mb-4">
                <Text className="text-lg mb-1 font-bold">CURRENT PASSWORD</Text>
                <TextInput
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    className="border-b-2 border-gray-300 pb-2"
                    secureTextEntry
                />
            </View>
            <View className="mb-4">
                <Text className="text-lg font-bold mb-1">NEW PASSWORD</Text>
                <TextInput
                    value={newPassword}
                    onChangeText={setNewPassword}
                    className="border-b-2 border-gray-300 pb-2"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity
                onPress={handleSaveChanges}
                className="bg-ww-primary rounded-full py-3 mt-4"
            >
                <Text className="text-ww-white font-bold text-center text-lg">
                    Save Changes
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default EditProfile
