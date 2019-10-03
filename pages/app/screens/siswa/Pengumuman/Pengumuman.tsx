import rawQuery from "@app/libs/queries/crud/rawQuery";
import { getSession } from "@app/libs/queries/user/getsetSession";
import UIBody from "@app/libs/ui/UIBody";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIList from "@app/libs/ui/UIList";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

dayjs.extend(RelativeTime);
export default observer(({ navigation }: any) => {
  const data = useObservable({
    loading: true,
    list: []
  });

  return (
    <UIContainer>
      <UIHead navigation={navigation} title="Pengumuman" />
      <UIBody>
        <UIList
          data={data.list}
          loading={data.loading}
          render={(list: any) => {
            const item = list.item;
            const date = dayjs(item.tgl).fromNow();
            return (
              <View style={{ padding: 10, paddingHorizontal: 15 }}>
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "#555" }}
                  >
                    {item.pengumuman}
                  </Text>
                  <Text>{date}</Text>
                </View>
              </View>
            );
          }}
          reload={async () => {
            const session = await getSession();
            const kelasRaw = await rawQuery(`{
              kelas_murid(where: {murid_id: {_eq: ${session.murid.id}}}) {
                kelas_id
              }
            }`);
            if (
              kelasRaw &&
              kelasRaw.kelas_murid &&
              kelasRaw.kelas_murid.length > 0
            ) {
              const kelas = kelasRaw.kelas_murid.map((k: any) => {
                return k.kelas_id.toString();
              });

              const result = await rawQuery(
                `{
                  pengumuman(where: {status: {_eq: "aktif"}, kelas: {_has_keys_any: ${JSON.stringify(
                    kelas
                  )}}}) {
                    pengumuman
                    status
                    tgl
                  }
                }
                `
              );

              data.list = result.pengumuman.map((item: any) => {
                return item;
              });
            }

            data.loading = false;
          }}
        />
      </UIBody>
    </UIContainer>
  );
});
