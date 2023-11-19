import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/map";

const screen_02 = ({ navigation, route, account, remove }) =>{
  var account = route.params;
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source={require(`../image/${account.image}`)}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Hi {route.params?.name}
            </Text>
            <Text style={{ color: "#9095A0" }}>Have agrate day a head</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Ionicons style={{ position: "absolute", left: 70, top: 3 }} name="search" size={24} color="black" />
        <TextInput
          style={{
            height: 30,
            width: 300,
            borderColor: "black",
            borderWidth: 0.5,
            paddingLeft: 30,
          }}
        />
      </View>
      <View style={{ marginTop: 50, alignItems: "center", height: 450, backgroundColor: "white" }}>
        <ScrollView>
          <FlatList
            data={account.todo}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  alignItems: "center",
                  backgroundColor: "#9095A0",
                  borderRadius: 20,
                  height: 60,
                  width: 300,
                }}
              >
                <AntDesign name="checksquareo" size={24} color="green" />
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item}</Text>
                <TouchableOpacity
                  onPress={() => {
                    // Call remove action when the user wants to delete a task
                    remove(account, item);
                  }}
                >
                  <AntDesign name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log(account);
          navigation.navigate("screen_03");
        }}
        style={{ alignItems: "center", marginTop: 30 }}
      >
        <Ionicons name="ios-add-circle" size={70} color="#00BDD6" />
      </TouchableOpacity>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(screen_02);
