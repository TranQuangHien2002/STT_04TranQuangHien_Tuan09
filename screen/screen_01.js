import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/map";

var screen_01 = ({ navigation, account, signin }) => {
  var [email, setEmail] = React.useState("tqhien27102002@gmail.com");
  console.log(account);
  if (account != undefined) {
    navigation.navigate("screen_02", account);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <Image
        style={{ height: 200, width: 200, marginTop: 150 }}
        source={require("../image/06815f4508d7df8986c6.jpg")}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>MANAGE YOUR TASK</Text>
      <View style={{ marginTop: 50 }}>
        <MaterialCommunityIcons
          style={{ position: "absolute", top: 10, left: 5 }}
          name="email-outline"
          size={24}
          color="black"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={{
            height: 40,
            width: 300,
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 30,
            borderRadius: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          signin(email);
        }}
        style={{
          backgroundColor: "#00BDD6",
          height: 50,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(screen_01);
