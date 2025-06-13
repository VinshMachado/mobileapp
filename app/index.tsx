import { View, Text, TextInput, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import "../styles/global.css";
import { Image } from "react-native";

const MyButton = (props: { image: any; name: string }) => {
  return (
    <Pressable className="bg-blue-500 h-44 w-44 px-6 py-3 flex justify-center items-start m-2 rounded-lg">
      <Image source={props.image} style={{ width: 80, height: 80 }} />
      <Text className="text-white text-xl font-semibold">{props.name}</Text>
    </Pressable>
  );
};

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center w-full bg-white p-4">
      <Text className="text-3xl font-bold mb-6">IYCS</Text>
      <ScrollView className="w-full">
        <View className="flex-1 justify-center items-center bg-white space-y-4">
          <Text className="text-3xl font-bold mb-6">Welcome</Text>
          <View className="w-full h-auto flex justify-center  items-center  flex-row flex-wrap">
            <MyButton
              name="Pope's Message"
              image={require("../assets/images/pope.png")}
            />

            <Pressable className="bg-blue-500 h-44 w-44  px-6 flex justify-center items-center py-3 m-2 rounded-lg">
              <Text className="text-white font-semibold text-xl ">
                Prayer Cornor
              </Text>
            </Pressable>
            <Pressable className="bg-blue-500 h-40 w-40 px-6 flex justify-center items-center py-3 m-2 rounded-lg">
              <Text className="text-white font-semibold text-xl ">News</Text>
            </Pressable>
            <Pressable className="bg-blue-500 h-40 w-40 px-6 flex justify-center items-center py-3 m-2 rounded-lg">
              <Text className="text-white font-semibold text-xl ">Videos</Text>
            </Pressable>
          </View>
        </View>

        <View></View>
      </ScrollView>
    </View>
  );
}
