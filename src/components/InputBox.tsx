import { Text, TextInput, View } from "react-native"

interface InputProp {
    value?: string
    placeholder?: string
    multiline?: boolean
    onChangeText?: (text: string) => void
}

const InputBox: React.FC<InputProp> = ({
    value,
    onChangeText,
    placeholder,
    multiline,
}) => {
    return (
        <View className="bg-ww-black/5 rounded-2xl p-4 mb-3">
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"gray"}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={multiline ? 7 : 1}
            />
        </View>
    )
}

export default InputBox
