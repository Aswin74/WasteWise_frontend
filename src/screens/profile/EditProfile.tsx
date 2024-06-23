import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native"
import { Ionicons } from "@expo/vector-icons" // You can use any icon library
import { AppBtn, InputBox } from "../../components"

const EditProfile = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [showPopup, setShowPopup] = useState(false)

    const handleSaveChanges = () => {
        // Logic to save the updated profile details
        console.log("Profile updated")
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 3000) // Hide the popup after 3 seconds
    }

    return (
        <SafeAreaView className="bg-ww-white p-5 flex-auto ">
            <ScrollView>
                {/* Profile Picture Overlay */}
                <View className="bg-ww-primary p-5 rounded-full self-center mt-5">
                    <Ionicons
                        name="person-circle-outline"
                        size={96}
                        color="#ffffff"
                    />
                </View>
                <View className="mb-4">
                    <Text className="text-lg font-bold text- mb-1 ">Name</Text>
                    <InputBox
                        placeholder="Jackson22"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View className="mb-4">
                    <Text className="text-lg mb-1 font-bold text-ww-black">
                        Email
                    </Text>
                    <InputBox
                        placeholder="userid@gmail.com"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View className="mb-4">
                    <Text className="text-lg font-bold mb-1">Phone no.</Text>
                    <InputBox
                        placeholder="989******"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <View className="mb-4">
                    <Text className="text-lg font-bold mb-1">Location</Text>
                    <InputBox
                        placeholder="India"
                        value={location}
                        onChangeText={setLocation}
                    />
                </View>
                <View className="mb-4">
                    <Text className="text-lg mb-1 font-bold">
                        Current Password
                    </Text>
                    <InputBox
                        placeholder="**********"
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry
                    />
                </View>
                <View className="mb-4">
                    <Text className="text-lg font-bold mb-1">New Password</Text>
                    <InputBox
                        placeholder="**********"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                </View>

                <AppBtn text="Save changes" onPress={handleSaveChanges} />
            </ScrollView>

            {showPopup && (
                <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-ww-primary bg-opacity-50">
                    <View className="w-3/4 p-6 bg-ww-white rounded-lg items-center">
                        <Text className="text-lg text-ww-black  mb-4">
                            Your Profile is Updated Successfully
                        </Text>
                        <TouchableOpacity
                            className="px-4 py-2 bg-ww-primary rounded"
                            onPress={() => setShowPopup(false)}
                        >
                            <Text className="text-ww-white">Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default EditProfile
