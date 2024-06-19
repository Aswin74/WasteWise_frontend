import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home"
import Chatbot from "../screens/Chatbot/Chatbot"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chatbot" component={Chatbot} />
    </Tab.Navigator>
  )
}

export default TabNavigator
