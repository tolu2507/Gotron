import { View, Text, Pressable, Image } from "react-native";

const TravelGroup = ({ key, data,handlePress }) => {
  return (
    <Pressable
      onPress={handlePress}
      key={key}
      android_ripple={{ color: "#24C2D86" }}
      className="w-[200px] h-[75px] bg-[#ffffff62] p-1 rounded-2xl relative space-x-1 mr-4 flex-row"
    >
      <View className="w-[85px] rounded-3xl">
        <Image source={data} className="rounded-3xl w-full h-full" />
      </View>
      <View className="flex-1">
        <View className="flex-1">
          <View>
            <Text className="font-bold">Arizona Beach</Text>
            <Text className="text-[#979191] font-semibold text-[8.5px]">
              Departure Time 26 sept 2022
            </Text>
          </View>
        </View>
        <View className="flex-1">
          <View className="flex-1 relative">
            <View className="bg-gray-600 absolute w-8 h-8 ml-0 rounded-full"></View>
            <View className="bg-gray-300 absolute w-8 h-8 ml-3 rounded-full"></View>
            <View className="bg-gray-600 absolute w-8 h-8 ml-6 rounded-full"></View>
            <View className="bg-gray-300 absolute w-8 h-8 ml-9 rounded-full"></View>
            <View className="bg-[#24C1D9] absolute w-8 h-8 ml-12 rounded-full items-center justify-center">
              <Text className="text-white">20+</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TravelGroup;
