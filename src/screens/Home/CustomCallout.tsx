import React from "react"
import { Text } from "react-native"
import { Callout } from "react-native-maps"

interface CalloutProp {
    title: string
    level: string
}

const CustomCallout: React.FC<CalloutProp> = ({ title, level }) => {
    const baseClass = "text-center"
    let textColor

    switch (level) {
        case "HIGH" || "high":
            textColor = "text-red-500"
            break

        case "LOW" || "low":
            textColor = "text-green-500"
            break

        default:
            textColor = "text-ww-logo"
    }

    const levelColor = `${baseClass} ${textColor}`
    return (
        <Callout className="h-24 w-36">
            <Text className="text-center text-sm font-semibold text-ww-primary">
                {title}
            </Text>
            <Text className={levelColor}>{level}</Text>
        </Callout>
    )
}

export default CustomCallout
