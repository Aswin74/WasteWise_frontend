import React, { useState } from "react"
import { AppBtn } from "../../components"
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    TouchableOpacity,
} from "react-native"
import { awsURL } from "../auth/Login"
import axios from "axios"

interface BinAddData {
    id: string
    longitude: string
    latitude: string
    location: string
    capacity: string
}

const BinAdd = () => {
    const [binName, setBinName] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [capacity, setCapacity] = useState<string>("")
    const [latitude, setLatitude] = useState<string>("")
    const [longitude, setLongitude] = useState<string>("")

    const handleAddBin = () => {
        if (binName && location && capacity && latitude && longitude) {
            const binData: BinAddData = {
                id: binName,
                longitude: longitude,
                latitude: latitude,
                capacity: capacity,
                location: location,
            }
            Alert.alert(
                "Bin Added",
                `Bin Name: ${binName}\nLocation: ${location}\nCapacity: ${capacity}\nLatitude: ${latitude}\nLongitude: ${longitude}`
            )
            addBin(binData)
        } else {
            Alert.alert("Error", "Please fill out all fields.")
        }
    }

    const addBin = async (data: BinAddData) => {
        try {
            const response = await axios.post(`${awsURL}/createbin/`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log("Successfull", response.data)
        } catch (error) {
            console.log("Failed", error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Bin</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Bin Name"
                    value={binName}
                    onChangeText={setBinName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Capacity"
                    value={
                        capacity !== undefined ? capacity.toString() : undefined
                    }
                    onChangeText={(text) => setCapacity(text)}
                    style={styles.input}
                    keyboardType="decimal-pad"
                />
                <TextInput
                    placeholder="Latitude"
                    value={
                        latitude !== undefined ? latitude.toString() : undefined
                    }
                    onChangeText={(text) => setLatitude(text)}
                    style={styles.input}
                    keyboardType="decimal-pad"
                />
                <TextInput
                    placeholder="Longitude"
                    value={
                        longitude !== undefined
                            ? longitude.toString()
                            : undefined
                    }
                    onChangeText={(text) => setLongitude(text)}
                    style={styles.input}
                    keyboardType="decimal-pad"
                />
                <AppBtn text="Add Bin" onPress={handleAddBin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    form: {
        width: "100%",
        maxWidth: 400,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#3490dc",
        width: "100%",
        borderRadius: 16,
        padding: 12,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
})

export default BinAdd
