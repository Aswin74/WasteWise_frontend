import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons } from "react-native-vector-icons"

interface InputProp {
    value?: string
    placeholder?: string
    multiline?: boolean
    secureTextEntry?: boolean
    onChangeText?: (text: string) => void
}

const InputBox: React.FC<InputProp> = ({
    value,
    onChangeText,
    placeholder,
    multiline,
    secureTextEntry,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className="flex-1 flex-row justify-between bg-ww-black/5 rounded-2xl p-4 mb-3">
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"gray"}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={multiline ? 7 : 1}
                secureTextEntry={showPassword}
            />

            {secureTextEntry && (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Ionicons
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={24}
                        color="#6b7280"
                        style={{ padding: 10 }}
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default InputBox
