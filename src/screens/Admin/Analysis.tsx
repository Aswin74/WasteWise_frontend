import React from "react"
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native"

const Analysis = () => {
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

            {/* Horizontal Scroll for buttons */}
            <ScrollView
                horizontal
                contentContainerStyle={styles.buttonContainer}
            >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Staff list</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Bin list</Text>
                </TouchableOpacity>
            </ScrollView>
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
        height: 300, // Adjust the height as needed
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
        marginTop: 50,
    },
    button: {
        padding: 10,
        backgroundColor: "#007bff",
        borderRadius: 5,
        marginRight: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
})

export default Analysis
