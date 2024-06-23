import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home"
import Chatbot from "../screens/Chatbot/Chatbot"
import Contact from "../screens/Contact/Contact"
import Feedback from "../screens/Feedback/Feedback"
import EditProfile from "../screens/profile/EditProfile"
import UserProfile from "../screens/profile/UserProfile"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chatbot" component={Chatbot} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Feedback" component={Feedback} />
            <Tab.Screen name="EditProfile" component={EditProfile} />
            <Tab.Screen name="UserProfile" component={UserProfile} />
        </Tab.Navigator>
    )
}

export default TabNavigator
