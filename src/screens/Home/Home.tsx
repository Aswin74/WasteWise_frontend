import { View, Text, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import axios from "axios"

interface MyModel {
  model: string
  pk: number
  fields: {
    name: number
    description: number
  }
}

const datata = [
  '[{"model": "WasteWise_app.mymodel", "pk": 340, "fields": {"name": 1, "description": "HIGH"}}, {"model": "WasteWise_app.mymodel", "pk": 341, "fields": {"name": 1, "description": "HIGH"}}, {"model": "WasteWise_app.mymodel", "pk": 342, "fields": {"name": 1, "description": "HIGH"}}, {"model": "WasteWise_app.mymodel", "pk": 343, "fields": {"name": 1, "description": "HIGH"}}, {"model": "WasteWise_app.mymodel", "pk": 344, "fields": {"name": 1, "description": "HIGH"}}, {"model": "WasteWise_app.mymodel", "pk": 345, "fields": {"name": 1, "description": "HIGH"}}]',
]

const Home = () => {
  const [loc] = useState({
    latitude: 8.564585239157829,
    longitude: 76.88430643863097,
    latitudeDelta: 0.005, // Street level zoom
    longitudeDelta: 0.0021,
  })

  // useEffect(() => {
  //     fetchSampleData()
  // }, [])

  // const fetchSampleData = async () => {
  //     try {
  //         const response = await axios.get(
  //             "http://3.106.190.149:8000/getdata"
  //         )

  //         if (response.data) {
  //             const models: MyModel[] = response.data.map(
  //                 (item: MyModel) => item.model
  //             ) // Type MyModel
  //             console.log("Models:", models)
  //         } else {
  //             console.log("No data received from endpoint.")
  //         }
  //     } catch (error) {
  //         if (axios.isAxiosError(error)) {
  //             // Check if error is an AxiosError
  //             console.error("Network Error:", error.message) // Access specific error message
  //         } else {
  //             console.error("Unexpected Error:", error)
  //         }
  //     }
  // }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        initialRegion={loc}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={{
            latitude: 8.564585239157829,
            longitude: 76.88430643863097,
          }}
          title={"smas s aple"}
          pinColor="blue"
        />
      </MapView>
    </View>
  )
}

export default Home
