import React, { useState } from "react"
import { View, ScrollView, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { AppBtn } from "../../components"

const UserProfile = () => {
    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("johndoe@example.com")
    const [phone, setPhone] = useState("1234567890")
    const [location, setLocation] = useState("New York")

    const handleUpdateProfile = () => {
        // Logic to update profile
        console.log("Profile updated")
        // You can add further logic here to update backend or show success message
    }

    return (
        <ScrollView>
            <View className="bg-ww-white p-5 flex-auto ">
                {/* Profile Picture Overlay */}
                <View className="bg-ww-primary p-5 rounded-full self-center mt-5">
                    <Ionicons
                        name="person-circle-outline"
                        size={96}
                        color="#ffffff"
                    />
                </View>

                {/* Content Section */}
                <View className="flex-1 mt-5">
                    <View />
                    {/* Name */}
                    <View className="flex-row items-center mb-5">
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color="#212529"
                            style={{ marginRight: 10 }}
                        />
                        <Text className="text-lg font-semibold text-ww-black">
                            {name}
                        </Text>
                    </View>

                    {/* Email */}
                    <View className="flex-row items-center mb-5">
                        <Ionicons
                            name="mail-outline"
                            size={24}
                            color="#212529"
                            style={{ marginRight: 10 }}
                        />
                        <Text className="text-lg font-semibold text-ww-black">
                            {email}
                        </Text>
                    </View>

                    {/* Phone Number */}
                    <View className="flex-row items-center mb-5">
                        <Ionicons
                            name="call-outline"
                            size={24}
                            color="#212529"
                            style={{ marginRight: 10 }}
                        />
                        <Text className="text-lg font-semibold text-ww-black">
                            {phone}
                        </Text>
                    </View>

                    {/* Location */}

                    <View className="flex-row items-center mb-5">
                        <Ionicons
                            name="location-outline"
                            size={24}
                            color="#212529"
                            style={{ marginRight: 10 }}
                        />
                        <Text className="text-lg font-semibold text-ww-black">
                            {location}
                        </Text>
                    </View>
                </View>

                {/* Update Profile Button */}
                <AppBtn text="Edit Profile" onPress={handleUpdateProfile} />
            </View>
        </ScrollView>
    )
}

export default UserProfile
