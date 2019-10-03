import config from "@app/libs/config";
import { createNavigateTo } from "@app/libs/nav/NavContainer";
import UIImage from "@app/libs/ui/UIImage";
import { RootStore } from "@app/libs/stores/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = observer((props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...props.style,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
      }}
    >
      <UIImage
        style={{
          width: 20,
          margin: 10,
          height: 20
        }}
        source={props.image}
      />
      <Text style={{ color: config.color.mainText }}>{props.text}</Text>
    </TouchableOpacity>
  );
});

export default ({ navigation }: any) => {
  const navigateTo = createNavigateTo(navigation);

  return (
    <View style={s.container}>
      <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: '#4f4f4f', }}>
        <UIImage
          source={require("@app/imgs/logo-edumatis_b.png")}
          mobileStyle={{
            height: 160
          }}
          style={{
            width: "70%",
            paddingTop: 20,
          }}
        />
        <Text style={{ color: '#fff', paddingBottom: 25, }}
        >Payment System</Text>
      </View>
      <Button
        text="Transaksi"
        onPress={() => {
          navigateTo("Transaksi");
        }}
        image={require("@app/imgs/transaksi.png")}
        style={{ marginTop: 10, }}
      />
      <Button
        text="Kewajiban"
        onPress={() => {
          navigateTo("Kewajiban");
        }}
        image={require("@app/imgs/kewajiban.png")}
      />
      <Button
        text="Pengumuman"
        onPress={() => {
          navigateTo("Pengumuman");
        }}
        image={require("@app/imgs/pengumuman.png")}
      />
      <Button
        text="Kelas & Murid"
        onPress={() => {
          navigateTo("Kelas");
        }}
        image={require("@app/imgs/kelas.png")}
      />
      <Button
        text="Report Print"
        onPress={() => {
          navigateTo("Report");
        }}
        image={require("@app/imgs/print.png")}
      />
      <Button
        text="Edit Profile"
        onPress={() => {
          navigateTo("EditProfile");
        }}
        image={require("@app/imgs/users.png")}
      />

      <Button
        text="Logout"
        style={{ marginTop: 20 }}
        image={require("@app/imgs/signout.png")}
        onPress={() => {
          (RootStore.session as any).logout();
          navigation.popToTop();
          navigation.replace("Login");
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: config.color.main
    backgroundColor: 'dimgrey',
  }
});
