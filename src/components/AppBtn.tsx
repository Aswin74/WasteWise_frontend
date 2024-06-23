import { Text, TouchableOpacity, GestureResponderEvent } from "react-native"

interface BtnProps {
    text: string
    onPress?: (e: GestureResponderEvent) => void
}

const AppBtn: React.FC<BtnProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            className="bg-ww-primary w-full rounded-2xl p-3"
            onPress={onPress}
        >
            <Text className="text-ww-white text-xl font-semibold text-center">
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default AppBtn
