import React, { useState } from "react"
import { View, Text, TextInput, Button, Alert } from "react-native"
import { AppBtn } from "../../components"

const AdminAdd = () => {
    const [firstName, setFirstName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleAdminAdd = () => {
        if (firstName && email && password) {
            // Perform the add admin action, e.g., send data to backend
            Alert.alert("Admin Added", `Name: ${firstName} \nEmail: ${email}`)
        } else {
            Alert.alert("Error", "Please fill out all fields.")
        }
    }

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <Text className="text-2xl font-bold mb-4">Add New Admin</Text>
            <View className="w-full max-w-md">
                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    className="border border-[#ccc] bg-white p-2 mb-4 rounded-xl"
                />

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    className="border border-[#ccc] bg-white p-2 mb-4 rounded-xl"
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    className="border border-[#ccc] bg-white p-2 mb-4 rounded-xl"
                    secureTextEntry
                />

                <AppBtn text="Add Admin" onPress={handleAdminAdd} />
            </View>
        </View>
    )
}

export default AdminAdd
