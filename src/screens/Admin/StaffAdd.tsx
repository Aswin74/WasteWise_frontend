import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { AppBtn } from "../../components";

const StaffAdd = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAddWorker = () => {
        if (firstName && lastName && email && password) {
            // Perform the add worker action, e.g., send data to backend
            Alert.alert(
                "Worker Added",
                `Name: ${firstName} ${lastName}\nEmail: ${email}`
            );
        } else {
            Alert.alert("Error", "Please fill out all fields.");
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <Text className="text-2xl font-bold mb-4">Add New Worker</Text>
            <View className="w-full max-w-md">
                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    className="border p-2 mb-4 rounded"
                />
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
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
    );
};

export default StaffAdd;
