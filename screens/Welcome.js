import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import { Ant9 } from "../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  const [num, setNum] = useState(4);

//   const rand = () => {
//     let newNum;
//     newNum = Math.floor(Math.random() * 10 + 1);
//     console.log(newNum);
//     setNum(newNum);
//   };

//   setInterval(() => {
//     rand();
//   }, 10000);

  const handlePress = () => {
    navigation.navigate("Tab");
  };
  return (
    <View className="flex-1 items-center relative">
      <Image
        source={num === 4 ? require("../assets/image/home.png") : Ant9}
        className=" w-full h-full object-cover"
      />

      <SafeAreaView className="flex-1 items-center flex-col justify-between top-5 absolute space-y-3">
        <View>
          <MaterialCommunityIcons name="hexagon" size={40} color="white" />
        </View>
        <View>
          <Text className="text-white text-center">Oniex</Text>
          <Text className="text-white">Travel Agency</Text>
        </View>
      </SafeAreaView>

      <SafeAreaView className="flex-1 items-center flex-col justify-between absolute bottom-5 space-y-6">
        <View className="space-y-3">
          <Text className="font-bold text-white text-2xl text-center">
            Explore Various
          </Text>
          <Text className="font-bold text-white text-3xl">
            Natural Beauty Of
          </Text>
          <Text className="font-bold text-white text-2xl text-center">
            United States
          </Text>
        </View>
        <View className="w-[270px] items-center ">
          <Text className="text-white text-justify">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </Text>
        </View>
        <View className="w-[320px] rounded-3xl items-center justify-center">
          <Pressable
            android_ripple={{ color: "[#24C1D9]" }}
            onPress={handlePress}
            className="w-full rounded-3xl p-7 bg-[#24C1D9] items-center justify-center"
          >
            <Text className="capitalize text-white font-bold text-2xl">
              get started
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
};

export default Welcome;
