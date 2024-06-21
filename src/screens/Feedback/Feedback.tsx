import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import InputBox from "../../components/InputBox";

const Feedback: React.FC = () => {
    return (
        <View className="flex-1 p-5 bg-ww-white">
            <Text className="text-xl font-bold mb-5">Feedback</Text>
            <InputBox placeholder="Enter your name" />
            <InputBox placeholder="Enter your email" />
            <InputBox placeholder="Your feedback" />

            <TouchableOpacity className="bg-ww-primary p-4 rounded-xl align-middle my-5">
                <Text className="text-ww-white text-xl font-bold text-center">
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Feedback;
