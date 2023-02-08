import { View, Text, Pressable, Image } from "react-native";
import { Foundation, FontAwesome5 } from "@expo/vector-icons";
import { Antelope } from "../assets/images";

const Travel = ({ key, data, handlePress }) => {
  return (
    <Pressable
      onPress={handlePress}
      key={key}
      android_ripple={{ color: "#24C2D86" }}
      className="w-[200px]  bg-[#ffffff62] p-1 rounded-2xl relative space-x-1 mr-4"
    >
      <View className="rounded-3xl h-[170px]">
        <Image
          source={data}
          className="rounded-3xl object-cover w-full h-full"
        />
        <View className="absolute top-0 ml-40 items-center justify-center align-top">
          <Foundation name="sheriff-badge" size={24} color="#24C1D9" />
        </View>
      </View>
      <View className="p-2">
        <Text className="font-bold text-[15px]">Antelope Canyon</Text>
        <View className="flex-row justify-between mt-2">
          <View className="flex-row items-center justify-center">
            <FontAwesome5 name="map-marker-alt" size={14} color="#969696" />
            <Text className="ml-1 text-[#979191]">Arizone</Text>
          </View>
          <View className="bg-[#DEDEE2] px-3 py-2 rounded-2xl items-center justify-center">
            <Text className="text-[#979191]">3 days</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Travel;
