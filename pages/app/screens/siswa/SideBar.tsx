import config from "@app/libs/config";
import { createNavigateTo } from "@app/libs/nav/NavContainer";
import rawQuery from "@app/libs/queries/crud/rawQuery";
import { getSession } from "@app/libs/queries/user/getsetSession";
import UIImage from "@app/libs/ui/UIImage";
import { RootStore } from "@app/libs/stores/RootStore";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
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

export default observer(({ navigation }: any) => {
  const navigateTo = createNavigateTo(navigation);
  const data = useObservable({
    session: {
      murid: {} as any
    },
    kelas: {} as any
  });

  useEffect(() => {
    const load = async function() {
      data.session = await getSession();
      let kelas = await rawQuery(`{
        kelas_murid(where: {murid_id: {_eq: ${data.session.murid.id}}}) {
          kelas {
            nama_kelas
          }
        }
      }
      `);
      if (kelas.kelas_murid.length > 0) {
        data.kelas = kelas.kelas_murid[0].kelas;
      }
    };
    load();
  }, []);

  return (
    <View style={s.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: '#4f4f4f',
        }}
      >
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
      <View
        style={{
          borderTopColor: "#8F7DD8",
          borderTopWidth: 1,
          marginBottom: 15
        }}
      />
      <Text style={{ padding: 10, paddingVertical: 2, color: "white" }}>
        NSA: {data.session.murid.nsa}
      </Text>
      <Text style={{ padding: 10, paddingVertical: 2, color: "white" }}>
        Nama: {data.session.murid.nama_murid}
      </Text>
      <Text style={{ padding: 10, paddingVertical: 2, color: "white" }}>
        Kelas: {data.kelas.nama_kelas}
      </Text>
      <TouchableOpacity
        style={{ marginTop: 10, marginLeft: 3 }}
        onPress={() => {
          navigateTo("UbahPassword");
        }}
      >
        <Text
          style={{
            padding: 7,
            paddingVertical: 2,
            color: "white",
            fontSize: 11
          }}
        >
          Ubah Password
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: "#8F7DD8",
          borderTopWidth: 1,
          marginVertical: 15
        }}
      />
      <View style={{ flex: 1 }}>
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
          text="Logout"
          style={{ marginTop: 20 }}
          image={require("@app/imgs/logout.png")}
          onPress={() => {
            (RootStore.session as any).logout();
            navigation.popToTop();
            navigation.replace("Login");
          }}
        />
      </View>
    </View>
  );
});

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: config.color.main
    backgroundColor: 'dimgrey',
  }
});
