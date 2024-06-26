import React, { useState } from "react"
import { View, Text, TextInput, Button, Alert } from "react-native"
import { AppBtn } from "../../components"
import { SignUpData } from "../../types"
import axios from "axios"
import { awsURL } from "../auth/Login"

const StaffAdd = () => {
    const [staffName, setStaffName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // POST request
    const addStaff = async (staffData: SignUpData) => {
        try {
            const response = await axios.post(
                `${awsURL}/staffreg/`,
                staffData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            console.log(response.data)
        } catch (error) {
            console.log("failed", error)
        }
    }

    const handleAddWorker = () => {
        if (staffName && email && password) {
            addStaff({
                username: staffName,
                contact: email,
                password: password,
            })
        } else {
            Alert.alert("Error", "Please fill out all fields.")
        }
    }

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <Text className="text-2xl font-bold mb-4">Add New Worker</Text>
            <View className="w-full max-w-md">
                <TextInput
                    placeholder="Staff Name"
                    value={staffName}
                    onChangeText={setStaffName}
                    className="border p-2 mb-4 rounded"
                />

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    className="border p-2 mb-4 rounded"
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    className="border p-2 mb-4 rounded"
                    secureTextEntry
                />

                <AppBtn text="Add User" onPress={handleAddWorker} />
            </View>
        </View>
    )
}

export default StaffAdd
