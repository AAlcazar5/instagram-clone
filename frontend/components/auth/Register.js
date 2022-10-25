import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import firebase from "firebase";
import "firebase/firestore";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
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
            placeholder="name"
            placeholderTextColor="white"
            autoCapitalize="none"
            className="mt-8 w-56"
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            placeholder="email"
            placeholderTextColor="white"
            autoCapitalize="none"
            className="mt-8 w-56"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="white"
            autoCapitalize="none"
            className="mt-8 w-56"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity
            className="bg-white p-4 rounded-2xl w-28 items-center justify-center mt-6"
            onPress={() => this.onSignUp()}
          >
            <Text className="font-bold">Register</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Register;
