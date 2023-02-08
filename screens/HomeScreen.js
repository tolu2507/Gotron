import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import Travel from "../components/Travel";
import TravelGroup from "../components/Groups";
import { categories, travel, travelGroup } from "../pages/data";

const HomeScreen = ({ navigation }) => {

  return (
    <View className="flex-1  mt-0 flex pl-3 pr-1 bg-[rgba(246,246,246,0.88)]">
      {/* top view */}
      <View className="flex-row mt-4 justify-between">
        <View className="space-y-1">
          <Text className="font-bold text-[25px]">Hello Soroushnrz</Text>
          <Text className="text-[#979191] font-bold text-[16px]">
            Explore The Best Places in World!
          </Text>
        </View>
        <View className="w-12 h-12 rounded-full bg-[#D6F9FD]">
          {/* <Image
            source={require("../assets/image/image3.png")}
            className="w-full h-12 object-contsin rounded-full"
          /> */}
        </View>
      </View>

      {/* search bar */}

      <View className="flex-row mt-8">
        <View className="flex-row flex-1 h-12 bg-[#FFFFFF] p-3 rounded-lg mr-2">
          <View className="w-10 items-center justify-center">
            <Ionicons name="search" size={24} color="#rgb(194,194,194)" />
          </View>
          <TextInput placeholder="Search Places" className="flex-1 bg-white" />
        </View>
        <Pressable
          android_ripple={{ color: "#24C2D86" }}
          className=" w-12 h-12 bg-[#24C1D9] items-center justify-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl mr-3"
        >
          <Ionicons name="reorder-two-sharp" size={24} color="white" />
        </Pressable>
      </View>

      <ScrollView showsVerticalnScrollIndicator={false}>
        {/* categories */}

        <View className="mt-5 space-y-4">
          <View>
            <Text className="font-bold text-[19px]">Categories</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="pl-2 mt-4 flex-row items-center">
              {categories?.map(({ name, key, icon }) => (
                <Categories name={name} icon={icon} key={key} />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* travel places */}
        <View className="mt-3 ">
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-xl">Travel Places</Text>
            <Text className="text-[#979191] font-semibold capitalize">
              See more
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="ml-2 mt-3 flex-row items-center">
              {travel?.map(({ key, data }) => (
                <Travel
                  key={key}
                  data={data}
                  handlePress={() => {
                    navigation.navigate("Details", { image: data });
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* travel group */}
        <View className="mt-3">
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-xl">Travel Group</Text>
            <Text className="text-[#979191] font-semibold capitalize">
              See more
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="ml-2 mt-3 flex-row items-center">
              {travelGroup?.map(({ key, data }) => (
                <TravelGroup
                  key={key}
                  data={data}
                  handlePress={() => {
                    navigation.navigate("Details", { image: data });
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
