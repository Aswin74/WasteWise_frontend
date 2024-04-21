import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./src/navigation/StackNavigator"
import { useFonts } from "expo-font"

export default function App() {
    const [fontsLoaded] = useFonts({
        "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    })

    return (
        <NavigationContainer>
            {fontsLoaded ? <StackNavigator /> : null}
        </NavigationContainer>
    )
}
