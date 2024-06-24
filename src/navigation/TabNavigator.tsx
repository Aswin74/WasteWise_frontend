import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home"
import Chatbot from "../screens/Chatbot/Chatbot"
import Contact from "../screens/Contact/Contact"
import Feedback from "../screens/Feedback/Feedback"
import UserProfile from "../screens/profile/UserProfile"
import React, { useState } from "react"
import TabBarIcon from "./TabBarIcon"
import { useNavigation } from "@react-navigation/native"
import Insights from "../screens/admin/Insights"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    const navigation = useNavigation()
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
                tabBarIconStyle: { marginTop: 5 }, // Adjust icon positioning if needed
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    title: "Home",

                    tabBarStyle: [
                        {
                            backgroundColor:
                                activeTab === "Chatbot" ? "#222" : "#323650",
                        },
                    ],
                }}
            />
            <Tab.Screen
                name="Chatbot"
                component={Chatbot}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="chatbubble" color={color} />
                    ), // Use Ionicons name
                    title: "Chatbot",
                }}
            />
            {/* Repeat for other screens */}
            <Tab.Screen
                name="About Us"
                component={Contact}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="information-circle" color={color} />
                    ), // Use Ionicons name
                    title: "About us",
                }}
            />
            <Tab.Screen
                name="Feedback"
                component={Feedback}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="star" color={color} />
                    ), // Use Ionicons name
                    title: "Feedback",
                }}
            />

            <Tab.Screen
                name="UserProfile"
                component={UserProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="person" color={color} />
                    ), // Use Ionicons name
                    title: "User Profile",
                }}
            />
            {/* <Tab.Screen
                name="Insights"
                component={Insights}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="star" color={color} />
                    ), // Use Ionicons name
                    title: "Insights",
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator
