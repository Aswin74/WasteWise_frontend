import {
    DrawerContentScrollView,
    DrawerItem,
    createDrawerNavigator,
} from "@react-navigation/drawer"

import { Text } from "react-native"
import BinAdd from "../screens/Admin/BinAdd"
import StaffAdd from "../screens/Admin/StaffAdd"
import AdminAdd from "../screens/Admin/AdminAdd"
import Analysis from "../screens/Admin/Analysis"
import Response from "../screens/Admin/Response"

const Drawer = createDrawerNavigator()

const AdminDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Analysis"
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
                            label={"Analysis"}
                            onPress={() => {
                                props.navigation.navigate("Analysis")
                            }}
                            focused={focusedRoute === "Analysis"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />
                        <DrawerItem
                            label={"Add bin"}
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
                            label={"Add staff"}
                            onPress={() => {
                                props.navigation.navigate("StaffAdd")
                            }}
                            focused={focusedRoute === "StaffAdd"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />
                        <DrawerItem
                            label={"Add admin"}
                            onPress={() => {
                                props.navigation.navigate("AdminAdd")
                            }}
                            focused={focusedRoute === "AdminAdd"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        />

                        {/* <DrawerItem
                            label={"Response"}
                            onPress={() => {
                                props.navigation.navigate("Response")
                            }}
                            focused={focusedRoute === "Response"}
                            activeBackgroundColor="#6b7280"
                            // inactiveBackgroundColor="red"
                            activeTintColor="#5ce1e6"
                            inactiveTintColor="#f0efeb"
                        /> */}
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen name="BinAdd" component={BinAdd} />
            <Drawer.Screen name="StaffAdd" component={StaffAdd} />
            <Drawer.Screen name="AdminAdd" component={AdminAdd} />
            <Drawer.Screen name="Analysis" component={Analysis} />
            <Drawer.Screen name="Response" component={Response} />
        </Drawer.Navigator>
    )
}

export default AdminDrawer
