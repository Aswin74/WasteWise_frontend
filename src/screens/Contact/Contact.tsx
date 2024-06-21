import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Detail Component
interface DetailProp {
    header: string;
    text: string;
}
const Detail: React.FC<DetailProp> = ({ header, text }) => {
    return (
        <View className="mb">
            <Text className="text-lg font-bold text-ww-gray">{header}</Text>
            <Text className="text-lg font-normal text-ww-black">{text}</Text>
        </View>
    );
};

const Contact: React.FC = () => {
    const adminDetails = {
        name: "WASTE WISE",
        address: "University College of Engineering kariavattom",
        contactNo: "8590413249",
    };

    return (
        <View className="flex-1 p-5 bg-ww-white">
            <Text className="text-xl font-bold mb-5">Contact Information</Text>
            <Detail header="Name" text={adminDetails.name} />
            <Detail header="Address" text={adminDetails.address} />
            <Detail header="ContactNo" text={adminDetails.contactNo} />
        </View>
    );
};

export default Contact;
