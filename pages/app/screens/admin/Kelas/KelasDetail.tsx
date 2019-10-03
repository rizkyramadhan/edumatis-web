import createRecord from "@app/libs/queries/crud/createRecord";
import rawQuery from "@app/libs/queries/crud/rawQuery";
import updateRecord from "@app/libs/queries/crud/updateRecord";
import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UIContainer from "@app/libs/ui/UIContainer";
import UIFieldText from "@app/libs/ui/UIFieldText";
import UIHead from "@app/libs/ui/UIHead";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import MuridList from "./MuridList";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    loading: true,
    murids: [],
    form: (navigation || { getParam: () => ({})}).getParam("item")
  });

  useEffect(() => {
    const fetch = async function() {
      let res = await rawQuery(`{
        murid(where: {kelas_murids: {kelas_id: {_eq: ${data.form.id}}}}) {
          id
          email
          data
          is_active
          nisn
          no_akta_kelahiran
          nsa
          tgl_lahir
          updated_at
          nama_murid
        }
      }
      `);
      data.murids = res.murid;
      data.loading = false;
    };
    fetch();
  }, []);

  return (
    <UIContainer>
      <UIHead
        navigation={navigation}
        title={` Kelas ` + (data.form.id ? `#${data.form.id}` : `Baru`)}
        onBack={() => {
          navigation.goBack();
        }}
      >
        <UIButton
          onPress={async () => {
            const form = { ...data.form };
            delete form.kelas_murids_aggregate;
            if (form.id) {
              await updateRecord("kelas", form);
            } else {
              await createRecord("kelas", form);
            }
            navigation.goBack();
          }}
        >
          Simpan
        </UIButton>
      </UIHead>
      <UIBody>
        <UIFieldText
          label="Nama Kelas"
          setValue={(value: any) => {
            data.form.nama_kelas = value;
          }}
          value={data.form.nama_kelas || ""}
        />
        <MuridList
          kelas={data.form}
          list={data.murids}
          loading={data.loading}
          navigation={navigation}
        />
      </UIBody>
    </UIContainer>
  );
});
