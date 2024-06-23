import { Ionicons } from "react-native-vector-icons"

interface LevelProp {
    level: string
}

const CustomBinIcon: React.FC<LevelProp> = ({ level }) => {
    const baseClass = "bg-ww-primary rounded-full p-1"
    let iconColor

    switch (level) {
        case "HIGH" || "high":
            iconColor = "text-red-500"
            break

        case "LOW" || "low":
            iconColor = "text-green-500"
            break

        default:
            iconColor = "text-ww-logo"
    }

    const iconClass = `${baseClass} ${iconColor}`

    return <Ionicons name="trash" size={24} className={iconClass} />
}

export default CustomBinIcon
