import { View, Text, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps"
import MapViewDirections from "react-native-maps-directions"
import * as Location from "expo-location"

import axios from "axios"
// types
import { BinData } from "../../types"
// component
import CustomBinIcon from "./CustomBinIcon"
import CustomCallout from "./CustomCallout"

const Home = () => {
    const [location, setLocation] = useState<any>()
    const [errorMsg, setErrorMsg] = useState<string>("")

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied")
                return
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    }, [])

    let text = "Waiting.."
    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        text = JSON.stringify(location)
        console.log(location)
    }

    const [loc] = useState({
        latitude: 8.564585239157829,
        longitude: 76.88430643863097,
        latitudeDelta: 0.005, // Street level zoom
        longitudeDelta: 0.0021,
    })

    const [binLocation, setBinLocation] = useState<BinData[]>([
        {
            title: "Bin001",
            level: "LOW",
            latitude: 8.575355587468675,
            longitude: 76.8754303241394,
        },
        {
            title: "Bin002",
            level: "MEDIUM",
            latitude: 8.555136415343156,
            longitude: 76.8671287722616,
        },
        {
            title: "Bin003",
            level: "HIGH",
            latitude: 8.560182729108378,
            longitude: 76.89829950781248,
        },
        {
            title: "Bin004",
            level: "LOW",
            latitude: 8.572105814249178,
            longitude: 76.89258397378916,
        },
        {
            title: "Bin005",
            level: "MEDIUM",
            latitude: 8.57324524605619,
            longitude: 76.87147890705761,
        },
    ])

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                provider={PROVIDER_GOOGLE}
                mapType="standard"
                initialRegion={loc}
                showsUserLocation={true}
                showsMyLocationButton={true}
                accessibilityRole="button"
            >
                {binLocation.map((bin) => (
                    <Marker
                        key={bin.title}
                        coordinate={{
                            latitude: bin.latitude,
                            longitude: bin.longitude,
                        }}
                        // title={bin.title}
                        // description={bin.level}
                    >
                        <CustomBinIcon level={bin.level} />
                        <CustomCallout title={bin.title} level={bin.level} />
                    </Marker>
                ))}

                {/* <MapViewDirections
                    origin={{
                        latitude: 8.564585239157829,
                        longitude: 76.88430643863097,
                    }}
                    destination={{
                        latitude: 8.575355587468675,
                        longitude: 76.8754303241394,
                    }}
                    apikey="AIzaSyCjnwJ28iI_Bmo-W82P9WNK8caBMEHO8uQ"
                /> */}
            </MapView>
        </View>
    )
}

export default Home
