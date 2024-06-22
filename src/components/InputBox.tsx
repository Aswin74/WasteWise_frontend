import { Text, TextInput, View } from "react-native";

interface InputProp {
    placeholder: string;
    multiline?: boolean;
}

const InputBox: React.FC<InputProp> = ({ placeholder, multiline }) => {
    return (
        <View className="bg-ww-black/5 rounded-2xl p-4 mb-3">
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"gray"}
                multiline={multiline}
                numberOfLines={multiline ? 7 : 1}
            />
        </View>
    );
};

export default InputBox;
