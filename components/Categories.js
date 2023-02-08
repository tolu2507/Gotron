import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Categories = ({ name, icon, key }) => {
  return (
    <View
      className="flex-row space-x-1 justify-center items-center p-2 mr-3 rounded-lg bg-[#DEDEE2]"
      key={key}
    >
      <FontAwesome5 name={icon} size={14} color="black" />
      <Text className="text-[#979191]">{name}</Text>
    </View>
  );
};

export default Categories;
