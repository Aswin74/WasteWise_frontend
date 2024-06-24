import { createDrawerNavigator } from "@react-navigation/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Bin from "./Bin"
import Staff from "./Staff"

const Drawer = createDrawerNavigator()

const Insights = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={Bin} />
                <Drawer.Screen name="Article" component={Staff} />
            </Drawer.Navigator>
        </GestureHandlerRootView>
    )
}

export default Insights
