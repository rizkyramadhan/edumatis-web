import StackNav from "@app/libs/nav/StackNav";
import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UIContainer from "@app/libs/ui/UIContainer";
import UIFieldText from "@app/libs/ui/UIFieldText";
import UIHead from "@app/libs/ui/UIHead";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import { View, Text } from "react-native";
import MuridDetailProfil from "./MuridDetailProfil";
import MuridDetailSide from "./MuridDetailSide";
import updateRecord from "@app/libs/queries/crud/updateRecord";
import createRecord from "@app/libs/queries/crud/createRecord";
import UIRow from "@app/libs/ui/UIRow";
import UICol from "@app/libs/ui/UICol";
import UIFieldSelectNative from "@app/libs/ui/UIFieldSelectNative";
import { hashPassword } from "@app/libs/queries/user/hashPassword";

export async function saveUser(form: any, kelas_id: number) {
  if (form.id) {
    await updateRecord("murid", form);
  } else {
    form.id = await createRecord("murid", form);
    if (form.id > 0 && kelas_id) {
      await createRecord("kelas_murid", {
        kelas_id: kelas_id,
        murid_id: form.id,
        is_active: "y"
      });
    }
  }

  if (!!form.password) {
    await hashPassword(form.id);
  }
}

const MuridSistem = observer(({ navigation, parentNavigation }: any) => {
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
          <UIRow>
            <UICol size={6} sizexs={12} sizesm={12} sizemd={12}>
              <UIFieldText
                label="NSA (Username)"
                setValue={(value: any) => {
                  data.form.nsa = value;
                }}
                value={data.form.nsa}
              />
            </UICol>
            <UICol size={6} sizexs={12} sizesm={12} sizemd={12}>
              <UIFieldText
                label="NISN"
                setValue={(value: any) => {
                  data.form.nisn = value;
                }}
                value={data.form.nisn}
              />
            </UICol>
          </UIRow>
          <UIFieldText
            label="Nama Lengkap"
            setValue={(value: any) => {
              data.form.nama_murid = value;
            }}
            value={data.form.nama_murid}
          />
          <UIRow>
            <UICol size={4} sizexs={12} sizesm={12} sizemd={12}>
              <UIFieldText
                label="E-Mail"
                setValue={(value: any) => {
                  data.form.email = value;
                }}
                value={data.form.email || ""}
              />
            </UICol>
          </UIRow>

          <UIRow>
            <UICol size={4} sizexs={12} sizesm={12} sizemd={12}>
              <UIFieldSelectNative
                label="Status"
                items={[
                  { value: "y", label: "Aktif" },
                  { value: "n", label: "Non-Aktif" }
                ]}
                setValue={(value: any) => {
                  data.form.is_active = value;
                }}
                value={data.form.is_active}
              />
            </UICol>
          </UIRow>

          <UIRow>
            <UICol size={4} sizexs={12} sizesm={12} sizemd={12}>
              <UIFieldText
                label="Ubah Password"
                type="password"
                setValue={(value: any) => {
                  data.form.password = value;
                }}
                value={data.form.password || ""}
              />
            </UICol>
          </UIRow>
        </UIBody>
      </View>
    </UIContainer>
  );
});

export default StackNav({
  MuridSistem: { screen: MuridSistem },
  MuridProfil: { screen: MuridDetailProfil }
});
