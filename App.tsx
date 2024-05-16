import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from "expo-font"
import Router from "./src/navigation/Router"

export default function App() {
    const [fontsLoaded] = useFonts({
        "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    })

    return (
        <NavigationContainer>
            {fontsLoaded ? <Router /> : null}
        </NavigationContainer>
    )
}
