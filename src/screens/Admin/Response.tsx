import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

const ResponseView = () => {
    const response = {
        id: "12345",
        email: "user@example.com",
        feedback: "This is a sample feedback from the user.",
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Response Details</Text>
                </View>
                <View style={styles.responseCard}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderText}>
                            Response ID: {response.id}
                        </Text>
                    </View>
                    <View style={styles.cardBody}>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Email:</Text>
                            <View style={styles.fieldBox}>
                                <Text style={styles.value}>
                                    {response.email}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Feedback:</Text>
                            <View style={styles.fieldBox}>
                                <Text style={styles.value}>
                                    {response.feedback}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#f9f9f9",
    },
    header: {
        backgroundColor: "#333",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    responseCard: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    cardHeader: {
        backgroundColor: "#333",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    cardHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    cardBody: {
        padding: 20,
    },
    fieldContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    label: {
        width: "30%",
        fontSize: 18,
        color: "#666",
    },
    fieldBox: {
        width: "70%",
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
    },
    value: {
        fontSize: 18,
    },
})

export default ResponseView
