import React from "react"
import { View, Text, StyleSheet } from "react-native"
import AppBtn from "../../components/AppBtn"

const Analysis = () => {
    const handleBinlist = () => {
        // Add implementation for this function
    }
    const handleStafflist = () => {}
    return (
        <View style={styles.container}>
            {/* Histogram placeholder */}
            <View style={styles.histogramPlaceholder}></View>

            {/* Details tab */}
            <View style={styles.detailsTab}>
                <Text style={styles.detailsText}>
                    Busiest time of day: [Time]
                </Text>
                <Text style={styles.detailsText}>
                    Day which is most busy: [Day]
                </Text>
            </View>

            {/* Buttons */}
            <View className="mb-2">
                <AppBtn text="Bin list" onPress={handleBinlist} />
            </View>
            <AppBtn text="Staff list" onPress={handleStafflist} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    histogramPlaceholder: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 500, // Adjust the height as needed
        backgroundColor: "#e0e0e0", // Placeholder color
    },
    detailsTab: {
        marginTop: 300, // Adjust this to leave space for the histogram
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 150,
        marginEnd: 100,
        paddingHorizontal: 20, // Reduced padding to make buttons closer
    },
    button: {
        padding: 10,
        backgroundColor: "#007bff",
        borderRadius: 10, // Increased border radius for a more rounded look
        width: 120, // Increased width to make buttons more prominent
        elevation: 5, // Added elevation for a more 3D look
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center", // Center the button text
        fontWeight: "bold", // Made text bold for a more prominent look
    },
})

export default Analysis
