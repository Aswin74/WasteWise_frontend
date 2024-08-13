import { View, Text, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
// Maps
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps"
import MapViewDirections from "react-native-maps-directions"
import * as Location from "expo-location"

import axios from "axios"
import { RouteProp, useRoute } from "@react-navigation/native"
// types
import { BinData } from "../../types"
import { LoginResponse, awsURL } from "../auth/Login"

// component
import CustomBinIcon from "./CustomBinIcon"
import CustomCallout from "./CustomCallout"

interface HomeScreenProps {
    route: RouteProp<{ params: LoginResponse }>
}

const Home: React.FC = () => {
    const route = useRoute()
    const { username, role } = route.params as LoginResponse

    const [location, setLocation] = useState<any>()
    const [errorMsg, setErrorMsg] = useState<string>("")

    const [binData, setBinData] = useState<BinData[]>([])

    useEffect(() => {
        console.log("rsponse:::", username, role)
    }, [])

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
        // console.log(location)
    }

    const [loc] = useState({
        latitude: 8.564585239157829,
        longitude: 76.88430643863097,
        latitudeDelta: 0.005, // Street level zoom
        longitudeDelta: 0.0021,
    })

    // const [binLocation, setBinLocation] = useState<BinData[]>([
    //     {
    //         title: "Bin001",
    //         level: 24,
    //         latitude: 8.575355587468675,
    //         longitude: 76.8754303241394,
    //     },
    //     {
    //         title: "Bin002",
    //         level: 56,
    //         latitude: 8.555136415343156,
    //         longitude: 76.8671287722616,
    //     },
    //     {
    //         title: "Bin003",
    //         level: 87,
    //         latitude: 8.560182729108378,
    //         longitude: 76.89829950781248,
    //     },
    //     {
    //         title: "Bin004",
    //         level: 44,
    //         latitude: 8.572105814249178,
    //         longitude: 76.89258397378916,
    //     },
    //     {
    //         title: "Bin005",
    //         level: 65,
    //         latitude: 8.57324524605619,
    //         longitude: 76.87147890705761,
    //     },
    // ])

    const getBinData = async () => {
        try {
            const response = await axios.get(`${awsURL}/getdata/`)
            setBinData(response.data)
            // console.log("Successfull Bin", response.data, "&&", binData)
        } catch (error) {
            console.log("BinFetching Failed", error)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            getBinData()
        }, 5 * 1000)

        return () => {
            clearInterval(intervalId)
        }

        // getBinData()
    }, [binData])

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
                {/* {binLocation.map((bin) => (
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
                ))} */}

                {binData.map((binda) => {
                    // if (
                    //     binda.latitude !== null &&
                    //     binda.longitude !== null &&
                    //     binda.level !== null
                    // ) {
                    return (
                        <Marker
                            key={binda.bin_id}
                            coordinate={{
                                latitude: binda.latitude,
                                longitude: binda.longitude,
                            }}
                            pinColor="blue"
                        >
                            <CustomBinIcon level={binda.level} />
                            <CustomCallout
                                title={binda.bin_id ?? "null"}
                                level={binda.level}
                            />
                        </Marker>
                    )
                    // } else {
                    //     return null
                    // }
                })}

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
