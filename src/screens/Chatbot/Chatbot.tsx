import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";

const Chatbot = () => {
    return (
        <View className="flex-1">
            <WebView
                source={{ uri: "https://kajolchand.github.io/WebChat/" }}
                style={{ flex: 1 }}
            />
        </View>
    );
};

export default Chatbot;
