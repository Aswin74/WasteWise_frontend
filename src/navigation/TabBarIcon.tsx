import { Ionicons } from "react-native-vector-icons"

interface TabBarIconProps {
    name: string
    color?: string // Optional color prop
    size?: number // Optional size prop
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size = 24 }) => {
    return <Ionicons name={name} color={color} size={size} />
}

export default TabBarIcon
