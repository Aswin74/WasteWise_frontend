import React from "react";
import { View, Text, Image } from "react-native";

import { contactIMG } from "../../assets";
import { Ionicons } from "react-native-vector-icons"; // Correct import

// Detail Component
interface DetailProp {
    header: string;
    text: string;
}
const Detail: React.FC<DetailProp> = ({ header, text }) => {
    const getIconName = (header: string) => {
        switch (header) {
            case "Name":
                return "person";
            case "Address":
                return "location-sharp";
            case "ContactNo":
                return "call";
            default:
                return "";
        }
    };

    return (
        <View className="mb-4 flex-row items-center">
            <Ionicons
                name={getIconName(header)}
                size={24}
                color="#6B7280"
                style={{ marginRight: 8 }}
            />
            <View>
                <Text className="text-lg font-bold text-left text-gray-700">
                    {header}
                </Text>
                <Text className="text-lg font-normal text-left text-ww-black">
                    {text}
                </Text>
            </View>
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
        <View className="flex-1 p-5 bg-white justify-center items-center">
            <Image
                source={contactIMG}
                style={{
                    width: 300,
                    height: 300,
                    marginBottom: 0,
                    marginTop: -100,
                }}
            />
            <Text className="mt- text-2xl font-bold mb-5 text-center text-ww-black">
                Get in Touch
            </Text>
            <View className="p-6 rounded-lg w-full bg-violet-100 max-w-md">
                <Detail header="Name" text={adminDetails.name} />
                <Detail header="Address" text={adminDetails.address} />
                <Detail header="ContactNo" text={adminDetails.contactNo} />
            </View>
        </View>
    );
};

export default Contact;
