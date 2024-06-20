import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home"
import Chatbot from "../screens/Chatbot/Chatbot"
import Contact from "../screens/Contact/Contact"
import Feedback from "../screens/Feedback/Feedback"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Feedback" component={Feedback} />
      <Tab.Screen name="Chatbot" component={Chatbot} />
    </Tab.Navigator>
  )
}

export default TabNavigator
