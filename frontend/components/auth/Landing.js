import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from "react-native";

export default function Landing({ navigation }) {
  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1 justify-center items-center pb-32"
        source={require("../../assets/instagram-background.jpg")}
      >
        <Image
          source={require("../../assets/instagram-logo.png")}
          className="h-12 w-12"
        />
        <TouchableOpacity
          className="w-32 bg-white p-4 rounded-2xl justify-center items-center mt-4"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-32 bg-white p-4 rounded-2xl justify-center items-center mt-4"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="font-bold">Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
