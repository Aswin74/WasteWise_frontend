import { Text, TextInput, View } from "react-native"

interface InputProp{
    placeholder:string,
}

const InputBox:React.FC<InputProp>= ({placeholder}) =>{
    return(
        <View
        className="bg-ww-black/5 rounded-2xl p-4 my-5"
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"gray"}
        />
      </View>
    )
}

export default InputBox