import { StatusBar } from "expo-status-bar"
import Animated, { BounceIn } from "react-native-reanimated"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
    return (
        <View style={styles.container}>
            <Text className="text-red-700">Initial Commit</Text>
            <Text className="text-blue-700">Integrated TailWind CSS</Text>
            <Animated.Text entering={BounceIn} className="text-green-700">
                Integrated React ReAnimated
            </Animated.Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
