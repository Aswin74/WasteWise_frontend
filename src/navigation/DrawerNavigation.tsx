import {
    DrawerContentScrollView,
    DrawerItem,
    createDrawerNavigator,
} from "@react-navigation/drawer"

import { Text } from "react-native"
import Contact from "../screens/Contact/Contact"
import Feedback from "../screens/Feedback/Feedback"

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="About"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#323650",
                },
                headerStyle: {
                    backgroundColor: "#323650",
                },
                headerTintColor: "#5ce1e6",
            }}
            drawerContent={(props) => {
                const { routeNames, index } = props.state
                const focusedRoute = routeNames[index]

                return (
                    // Drawer Content
                    <DrawerContentScrollView {...props}>
                        <Text className="text-ww-logo mx-auto mt-12 mb-5">
                            WasteWise
                        </Text>
                        <DrawerItem
                            label={"About Us"}
                            onPress={() => {
                                props.navigation.navigate("About")
                            }}
                            focused={focusedRoute === "About"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />
                        <DrawerItem
                            label={"Feedback"}
                            onPress={() => {
                                props.navigation.navigate("Feedback")
                            }}
                            focused={focusedRoute === "Feedback"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen name="About" component={Contact} />
            <Drawer.Screen name="Feedback" component={Feedback} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
