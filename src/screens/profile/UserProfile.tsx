import React, { useState } from "react"
import { View, Image, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { AppBtn } from "../../components"
import { wavebg } from "../../assets"

const UserProfile = () => {
    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("johndoe@example.com")
    const [phone, setPhone] = useState("1234567890")
    const [location, setLocation] = useState("New York")
    const [password, setPassword] = useState("**********")
    const [showPassword, setShowPassword] = useState(false)

    const handleUpdateProfile = () => {
        // Logic to update profile
        console.log("Profile updated")
        // You can add further logic here to update backend or show success message
    }

    return (
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
                    <TextInput
                        className="flex-1 border-[1px] rounded border-ww-gray p-[10px]"
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter name"
                    />
                </View>

                {/* Email */}
                <View className="flex-row items-center mb-5">
                    <Ionicons
                        name="mail-outline"
                        size={24}
                        color="#212529"
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        className="flex-1 border-[1px] rounded border-ww-gray p-[10px]"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter email"
                    />
                </View>

                {/* Phone Number */}
                <View className="flex-row items-center mb-5">
                    <Ionicons
                        name="call-outline"
                        size={24}
                        color="#212529"
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        className="flex-1 border-[1px] rounded border-ww-gray p-[10px]"
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="Enter phone number"
                    />
                </View>

                {/* Location */}

                <View className="flex-row items-center mb-5">
                    <Ionicons
                        name="location-outline"
                        size={24}
                        color="#212529"
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        className="flex-1 border-[1px] rounded border-ww-gray p-[10px]"
                        value={location}
                        onChangeText={setLocation}
                        placeholder="Enter location"
                    />
                </View>

                {/* Password */}
                <View className="flex-row items-center mb-5">
                    <Ionicons
                        name="lock-closed-outline"
                        size={24}
                        color="#212529"
                        style={{ marginRight: 10 }}
                    />
                    <View className="flex-1 flex-row border-[1px] border-ww-gray rounded items-center ">
                        <TextInput
                            className="flex-1 p-[10px]"
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons
                                name={
                                    showPassword
                                        ? "eye-off-outline"
                                        : "eye-outline"
                                }
                                size={24}
                                color="#6b7280"
                                style={{ padding: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Update Profile Button */}
                <AppBtn text="Edit Profile" onPress={handleUpdateProfile} />
            </View>
        </View>
    )
}

export default UserProfile
