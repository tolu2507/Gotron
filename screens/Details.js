import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Details = ({ navigation, route }) => {
  const { image } = route.params;
  return (
    <View className="flex-1 relative">
      <Image source={image} className=" w-full h-full object-cover" />

      <View className="flex-1 absolute h-full w-full">
        <SafeAreaView className=" p-6 h-[300px]">
          <Pressable
            className="py-6"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
        </SafeAreaView>

        <SafeAreaView className="p-5 flex-1 rounded-t-[50px] justify-between bg-amber-50">
          <View className="space-y-4">
            <Text className="font-bold text-[25px]">Antelope Canyon</Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="map-marker-alt" size={20} color="#24C1D9" />
                <Text className="ml-1 text-[#767676] font-semibold text-l">
                  Arizona
                </Text>
              </View>

              <View className="flex-row items-center justify-center">
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={20}
                  color="#24C1D9"
                />
                <Text className="ml-1 text-[#767676] font-semibold text-l">
                  26 Sep, 2022
                </Text>
              </View>

              <View className="flex-row items-center justify-center">
                <MaterialCommunityIcons
                  name="timer-sand-complete"
                  size={20}
                  color="#24C1D9"
                />
                <Text className="ml-1 text-[#767676] font-semibold text-l">
                  3 Days
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-2 pb-3 items-center border-b-2 border-[#E9E9E9]">
              <Text className="font-bold text-[22px]">895$</Text>
              <Text className="capitalize font-semibold text-[#767676]">
                per person
              </Text>
            </View>
          </View>
          <View className="space-y-4">
            <Text className="font-bold text-2xl">About place</Text>
            <Text className="text-[#767676]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
            </Text>
          </View>

          <View className="flex-row items-center">
            <View className="w-[170px] mr-2">
              <View className="flex-1 relative w-full">
                <View className="bg-gray-600 absolute w-12 h-12 ml-0 rounded-full"></View>
                <View className="bg-gray-300 absolute w-12 h-12 ml-3 rounded-full"></View>
                <View className="bg-gray-600 absolute w-12 h-12 ml-6 rounded-full"></View>
                <View className="bg-gray-300 absolute w-12 h-12 ml-9 rounded-full"></View>
                <View className="bg-[#24C1D9] absolute w-12 h-12 ml-12 rounded-full items-center justify-center">
                  <Text className="text-white">20+</Text>
                </View>
              </View>
            </View>
            <View className="bg-[#E8FCFF] flex-1  items-center justify-center py-3 rounded-2xl">
              <Text>Join Member</Text>
            </View>
          </View>

          <Pressable
            android_ripple={{ color: "[#24C1D9]" }}
            className="w-full rounded-3xl p-7 bg-[#24C1D9] items-center justify-center"
          >
            <Text className="capitalize text-white font-bold text-2xl">
              Book Now
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Details;
