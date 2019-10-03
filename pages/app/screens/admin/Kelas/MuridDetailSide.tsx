import config from "@app/libs/config";
import UIImage from "@app/libs/ui/UIImage";
import { observer } from "mobx-react-lite";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Button = observer((props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
      }}
    >
      <UIImage
        style={{
          width: 20,
          padding: 10,
          height: 20
        }}
        source={props.image}
      />
      <Text style={{ color: config.color.main }}>{props.text}</Text>
    </TouchableOpacity>
  );
});

export default ({ navigation, form }: any) => {
  return (
    <View
      style={{
        flexBasis: 200,
        borderRightWidth: 1,
        backgroundColor: "#ececeb",
        borderRightColor: "#ccc"
      }}
    >
      <Button
        text="Data Sistem"
        onPress={() => {
          navigation.replace("MuridSistem");
        }}
        image={require("@app/imgs/shield.png")}
      />
      {form && form.id && (
        <Button
          text="Data Diri"
          onPress={() => {
            navigation.replace("MuridProfil");
          }}
          image={require("@app/imgs/user.png")}
        />
      )}
    </View>
  );
};
