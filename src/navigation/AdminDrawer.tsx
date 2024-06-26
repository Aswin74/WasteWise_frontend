import {
    DrawerContentScrollView,
    DrawerItem,
    createDrawerNavigator,
} from "@react-navigation/drawer"

import { Text } from "react-native"
import Contact from "../screens/Contact/Contact"
import Feedback from "../screens/Feedback/Feedback"
import AdminAdd from "../screens/admin/BinAdd"
import BinAdd from "../screens/admin/BinAdd"
import StaffAdd from "../screens/admin/StaffAdd"
const Drawer = createDrawerNavigator()

const AdminDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="BinAdd"
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
                            label={"Bin Add"}
                            onPress={() => {
                                props.navigation.navigate("BinAdd")
                            }}
                            focused={focusedRoute === "BinAdd"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />
                        <DrawerItem
                            label={"StaffAdd"}
                            onPress={() => {
                                props.navigation.navigate("StaffAdd")
                            }}
                            focused={focusedRoute === "StaffAdd"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen name="BinAdd" component={BinAdd} />
            <Drawer.Screen name="StaffAdd" component={StaffAdd} />
        </Drawer.Navigator>
    )
}

export default AdminDrawer
