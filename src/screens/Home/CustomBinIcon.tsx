import { Ionicons } from "react-native-vector-icons"

interface LevelProp {
    level: number
}

const CustomBinIcon: React.FC<LevelProp> = ({ level }) => {
    const baseClass = "bg-ww-primary rounded-full p-1"
    let iconColor

    if (level >= 80) iconColor = "text-red-500"
    else if (level <= 40) iconColor = "text-green-500"
    else iconColor = "text-ww-logo"

    const iconClass = `${baseClass} ${iconColor}`

    return <Ionicons name="trash" size={24} className={iconClass} />
}

export default CustomBinIcon
