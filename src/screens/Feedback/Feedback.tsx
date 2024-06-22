import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import InputBox from "../../components/InputBox";

const Feedback: React.FC = () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
    const [showFeedbackMessage, setShowFeedbackMessage] =
        useState<boolean>(false);
    const emojis = ["😠", "😞", "😐", "😊", "😃"];

    const handleEmojiSelection = (emoji: string) => {
        setSelectedEmoji(emoji);
    };

    const handleSubmit = () => {
        setShowFeedbackMessage(true);
        setTimeout(() => {
            setShowFeedbackMessage(false);
        }, 3000); // Hide the message after 3 seconds
    };

    return (
        <View className="flex-1 p-5 bg-ww-white">
            <Text className="text-2xl font-bold mb-8 text-center text-ww-black">
                Feedback
            </Text>

            <InputBox placeholder="Enter your name" />
            <InputBox placeholder="Enter your email" />
            <InputBox placeholder="Let us know your thoughts..." multiline />

            <View className="flex flex-row justify-between mt-5 mb-5">
                {emojis.map((emoji, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleEmojiSelection(emoji)}
                        className={`p-2 ${
                            selectedEmoji === emoji
                                ? "bg-ww-primary rounded-full"
                                : ""
                        }`}
                    >
                        <Text className="text-3xl">{emoji}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                onPress={handleSubmit}
                className="bg-ww-primary p-4 rounded-xl align-middle my-5"
            >
                <Text className="text-ww-white text-xl font-bold text-center">
                    Submit
                </Text>
            </TouchableOpacity>

            {showFeedbackMessage && (
                <View
                    className="p-4 rounded-xl my-5"
                    style={{ backgroundColor: "rgba(254, 215, 170, 0.8)" }}
                >
                    <Text className="text-xl font-bold text-center">
                        Thank you for your feedback!
                    </Text>
                </View>
            )}
        </View>
    );
};

export default Feedback;
