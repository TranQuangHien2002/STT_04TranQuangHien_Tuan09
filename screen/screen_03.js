import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/map";

var screen_03 = ({ navigation, account, put , edit, route}) => {
  console.log(account);
  var [request, setRequest] = React.useState("")
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
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source={require(`../image/${account.image}`)}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Hi {account.name}
            </Text>
            <Text style={{ color: "#9095A0" }}>Have agrate day a head</Text>
          </View>
        </View>
        <TouchableOpacity >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>ADD YOUR JOB</Text>
        <View style={{ marginTop: 20 }}>
          <Entypo
            style={{ position: "absolute", top: 5, left: 5 }}
            name="news"
            size={25}
            color="green"
          />
          <TextInput
            style={{
              height: 35,
              width: 300,
              borderWidth: 1,
              borderColor: "gray",
              paddingLeft: 40,
              borderRadius: 5,
            }}
            valua={request}
            onChangeText={setRequest}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: 150,
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            flexDirection: "row",
            marginTop: 40,
          }}
          onPress={() => {
        const { jobId, isEdit } = route.params || {};
        if (isEdit) {
          // Call the edit action if it's an edit
          edit(account, jobId, request);
        } else {
          // Otherwise, call the put action
          put(account, request);
        }
        navigation.navigate("screen_02", account);
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "400", color: "white" }}>
        {route.params?.isEdit ? "EDIT" : "FINISH"}
      </Text>
      <AntDesign name="arrowright" size={20} color="white" />
    </TouchableOpacity>

        <Image style={{ height: 200, width: 200, marginTop: 100 }} source={require('../image/06815f4508d7df8986c6.jpg')} />
      </View>
    </View>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(screen_03)