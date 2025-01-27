import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home"
import Chatbot from "../screens/Chatbot/Chatbot"
import Contact from "../screens/Contact/Contact"
import Feedback from "../screens/Feedback/Feedback"
import UserProfile from "../screens/profile/UserProfile"
import React, { useState } from "react"
import TabBarIcon from "./TabBarIcon"
import DrawerNavigation from "./DrawerNavigation"
import AdminDrawer from "./AdminDrawer"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "./Router"
import BinAdd from "../screens/Admin/BinAdd"
import ResponseView from "../screens/Admin/Response"

type HomeTabProps = NativeStackScreenProps<RootStackParamList, "HomeTabs">
const Tab = createBottomTabNavigator()

const TabNavigator: React.FC<HomeTabProps> = ({ route }) => {
    const { username, role } = route.params

    const [activeTab, setActiveTab] = useState("Home")

    const handlePress = (name: string) => {
        setActiveTab(name)
    }
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: "#5ce1e6",
                tabBarActiveTintColor: "#5ce1e6",
                tabBarInactiveTintColor: "rgba(2,225,230,0.7)",
                tabBarStyle: {
                    backgroundColor: "#323650",
                    borderTopColor: "#6b7280",
                    borderTopWidth: 1,
                },
                headerStyle: {
                    backgroundColor: "#323650",
                },
                tabBarIconStyle: { marginTop: 5 },
            }}
        >
            <Tab.Screen
                name="Home"
                initialParams={{ username, role }}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    title: "Home",

                    // tabBarStyle: [
                    //     {
                    //         backgroundColor:
                    //             activeTab === "Chatbot" ? "#222" : "#323650",
                    //     },
                    // ],
                }}
            >
                {() => <Home />}
            </Tab.Screen>
            <Tab.Screen
                name="Chatbot"
                component={Chatbot}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="chatbubbles" color={color} />
                    ),
                    title: "Chatbot",
                }}
            />

            {role !== "admin" && (
                <Tab.Screen
                    name="About Us"
                    component={DrawerNavigation}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="information-circle"
                                color={color}
                            />
                        ),
                        title: "Contact us",
                        headerShown: false,
                    }}
                />
            )}

            {role === "admin" && (
                <Tab.Screen
                    name="Responses"
                    component={ResponseView}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="chatbox-ellipses" color={color} />
                        ),

                        title: "Responses",
                    }}
                />
            )}

            {role === "admin" && (
                <Tab.Screen
                    name="Admin"
                    component={AdminDrawer}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="person" color={color} />
                        ),
                        title: "Admin",
                    }}
                />
            )}

            {role === "user" && (
                <Tab.Screen
                    name="UserProfile"
                    component={UserProfile}
                    initialParams={{ username, role }}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="person" color={color} />
                        ),
                        title: "Profile",
                    }}
                />
            )}
        </Tab.Navigator>
    )
}

export default TabNavigator
