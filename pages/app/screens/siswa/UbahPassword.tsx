import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UIContainer from "@app/libs/ui/UIContainer";
import UIFieldText from "@app/libs/ui/UIFieldText";
import UIHead from "@app/libs/ui/UIHead";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import { Text, Alert, Platform } from "react-native";
import { getSession } from "@app/libs/queries/user/getsetSession";
import updateRecord from "@app/libs/queries/crud/updateRecord";
import { hashPassword } from "@app/libs/queries/user/hashPassword";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    new1: "",
    new2: "",
    old: "",
    loading: false
  });
  return (
    <UIContainer>
      <UIHead navigation={navigation} title="Ubah Password" />
      <UIBody>
        <UIFieldText
          type="password"
          label="Password Lama"
          value={data.old}
          setValue={(value: string) => (data.old = value)}
        />

        <UIFieldText
          type="password"
          label="Password Baru"
          value={data.new1}
          setValue={(value: string) => (data.new1 = value)}
        />

        <UIFieldText
          type="password"
          label="Ulangi Password Baru"
          value={data.new2}
          setValue={(value: string) => (data.new2 = value)}
        />

        {data.loading ? (
          <Text>Loading...</Text>
        ) : (
          <UIButton
            onPress={async () => {
              const a = Platform.OS === "web" ? alert : Alert.alert;

              const session = await getSession();

              if (!data.new1 || !data.new2 || !data.old) {
                a("Mohon isi password dengan lengkap");
                return false;
              }
              if (data.new1 !== data.new2) {
                a("Password tidak sama ");
                return false;
              }
              data.loading = true;

              const response: Response = await fetch(
                "https://backend.cap.edumatis.id",
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Hasura-Username": session.murid.nsa,
                    "X-Hasura-Password": data.old,
                    "X-Hasura-Cid": session.murid.sekolah_id + ""
                  }
                }
              );
              let res = await response.json();
              console.log(res, {
                "Content-Type": "application/json",
                "X-Hasura-Username": session.murid.nsa,
                "X-Hasura-Password": data.old,
                "X-Hasura-Cid": session.murid.sekolah_id + ""
              });
              if (res["X-Hasura-Role"] !== "anonymous") {
                await updateRecord("murid", {
                  id: session.murid.id,
                  password: data.new1
                });
                await hashPassword(session.murid.id);
                a("Password berhasil di-ubah!");
              } else {
                a("Password lama salah");
              }

              data.loading = false;
            }}
          >
            Ubah Password
          </UIButton>
        )}
      </UIBody>
    </UIContainer>
  );
});
