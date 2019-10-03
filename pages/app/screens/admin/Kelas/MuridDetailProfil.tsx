import UIBody from "@app/libs/ui/UIBody";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import { View, Text } from "react-native";
import MuridDetailSide from "./MuridDetailSide";
import UIButton from "@app/libs/ui/UIButton";
import { saveUser } from "./MuridDetail";
import UIJson from "@app/libs/ui/UIJson";

export default observer(({ navigation, parentNavigation }: any) => {
  const data = useObservable({
    loading: true,
    form: (parentNavigation || { getParam: () => ({})}).getParam("item"),
    kelas: (parentNavigation || { getParam: () => ({})}).getParam("kelas")
  });

  return (
    <UIContainer>
      <UIHead
        navigation={navigation}
        title={
          data.form.id ? `Detail Siswa #${data.form.id}` : `Buat Siswa Baru`
        }
        onBack={() => {
          parentNavigation.goBack();
        }}
      >
        <UIButton
          onPress={async () => {
            const form = { ...data.form };
            await saveUser(form, data.kelas.id);
            parentNavigation.goBack();
          }}
        >
          Simpan
        </UIButton>
      </UIHead>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          borderTopColor: "#ccc",
          borderTopWidth: 1
        }}
      >
        <MuridDetailSide navigation={navigation} form={data.form} />
        <UIBody>
          {data.form.data ? (
            <UIJson data={data.form.data} />
          ) : (
            <Text>&mdash; Data Diri Kosong &mdash; </Text>
          )}
        </UIBody>
      </View>
    </UIContainer>
  );
});
