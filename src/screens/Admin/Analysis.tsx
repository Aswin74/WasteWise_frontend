import React, { useEffect, useState } from "react"
import axios from "axios"
import { View, Text, StyleSheet } from "react-native"
import { BarChart } from "react-native-gifted-charts"

import AppBtn from "../../components/AppBtn"

interface BinAnalysis {
    id: number
    day_of_week: string
    maxlevel: number
}
interface ChartData {
    value: number
    label: string
}

const Analysis = () => {
    const [fetchData, setFetchData] = useState<BinAnalysis[]>([])
    const [chartData, setChartData] = useState<ChartData[]>([])

    const tempData: ChartData[] = [
        { label: "Monday", value: 40 },
        { label: "Tuesday", value: 30 },
        { label: "Wednesday", value: 95 },
        { label: "Thursday", value: 70 },
        { label: "Friday", value: 20 },
        { label: "Saturday", value: 45 },
        { label: "Sunday", value: 10 },
    ]

    // Fetching Data
    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get(
                    "http://3.26.113.171/histogram/"
                )
                setFetchData(response.data)
                console.log("da", response.data)
            } catch (e) {
                console.log("Eror", e)
            }
        }

        fetchChartData()

        const timeInterval = setInterval(fetchChartData, 300 * 1000)
        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    // Destructuring to Chart Data
    useEffect(() => {
        if (fetchData) {
            const deData: ChartData[] = fetchData.map((item) => ({
                value: item.maxlevel,
                label: item.day_of_week,
            }))
            setChartData(deData)
        }
    }, [fetchData])

    const handleBinlist = () => {
        // Add implementation for this function
    }
    const handleStafflist = () => {}
    return (
        <View className="flex-1 p-3">
            {/* Histogram */}
            <View className="px-3 py-4 bg-[#f9f9f9] shadow-md shadow-black rounded-xl">
                <Text className="text-ww-primary mb-2 font-semibold text-2xl text-center">
                    Data Level Analysis
                </Text>
                <BarChart
                    data={chartData}
                    height={250}
                    frontColor={"#5ce1e6"}
                    yAxisTextStyle={{ color: "#6b7280" }}
                    xAxisLabelTextStyle={{ color: "#6b7280" }}
                    barWidth={20}
                    barBorderRadius={4}
                    spacing={15}
                    maxValue={100}
                    xAxisThickness={0}
                    yAxisThickness={0}
                    isAnimated
                />
            </View>

            {/* Details tab */}
            <View className="my-3 p-4 bg-[#f9f9f9] shadow-md shadow-black rounded-xl">
                <Text className="text-ww-black text-md font-semibold">
                    Busiest Day:{" "}
                    {
                        chartData.reduce((max, current) =>
                            max.value > current.value ? max : current
                        ).label
                    }
                </Text>
                {/* <Text style={styles.detailsText}>
                   Busiest Time of the Day: [time]
                </Text> */}
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
