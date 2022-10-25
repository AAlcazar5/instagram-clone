import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
          <TextInput
            placeholder="email"
            placeholderTextColor="white"
            className="mt-8 w-56"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="white"
            className="mt-8 w-56"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />

          <TouchableOpacity
            className="w-32 bg-white p-4 rounded-2xl justify-center items-center mt-6"
            onPress={() => this.onSignUp()}
          >
            <Text className="font-bold">Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
