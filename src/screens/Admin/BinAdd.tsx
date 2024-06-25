import React, { useState } from "react";
import { AppBtn } from "../../components";
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const BinAdd = () => {
    const [binName, setBinName] = useState("");
    const [location, setLocation] = useState("");
    const [capacity, setCapacity] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleAddBin = () => {
        if (binName && location && capacity && latitude && longitude) {
            Alert.alert(
                "Bin Added",
                `Bin Name: ${binName}\nLocation: ${location}\nCapacity: ${capacity}\nLatitude: ${latitude}\nLongitude: ${longitude}`
            );
        } else {
            Alert.alert("Error", "Please fill out all fields.");
        }
    };

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
                    value={capacity}
                    onChangeText={setCapacity}
                    style={styles.input}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Latitude"
                    value={latitude}
                    onChangeText={setLatitude}
                    style={styles.input}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Longitude"
                    value={longitude}
                    onChangeText={setLongitude}
                    style={styles.input}
                    keyboardType="numeric"
                />
                <AppBtn text="Add Bin" onPress={handleAddBin} />
            </View>
        </View>
    );
};

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
});

export default BinAdd;
