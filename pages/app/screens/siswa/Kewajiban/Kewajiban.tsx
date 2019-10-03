import StackNav from "@app/libs/nav/StackNav";
import rawQuery from "@app/libs/queries/crud/rawQuery";
import { getSession } from "@app/libs/queries/user/getsetSession";
import UIBody from "@app/libs/ui/UIBody";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIList from "@app/libs/ui/UIList";
import UIListItem from "@app/libs/ui/UIListItem";
import dayjs from "dayjs";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import { Text, View } from "react-native";
import KewajibanDetail from "./KewajibanDetail";

const Kewajiban = observer(({ navigation }: any) => {
  const data = useObservable({
    list: [],
    loading: true
  });
  return (
    <UIContainer>
      <UIHead title="Kewajiban bulan ini" navigation={navigation} />
      <UIBody>
        <UIList
          data={data.list}
          loading={data.loading}
          render={(list: any) => {
            const item = list.item;
            return (
              <UIListItem
                onPress={() => {
                  navigation.navigate("KewajibanDetail", {
                    item: item
                  });
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "#555" }}
                  >
                    {item.nama_kewajiban}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    Rp {item.nominal.toLocaleString()} ({item.status})
                  </Text>
                </View>
                <View>
                  <Text>{item.tipe_pembayaran}</Text>
                </View>
              </UIListItem>
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
              const monthStart = dayjs()
                .startOf("month")
                .subtract(1, "day")
                .format("YYYY-MM-DD");
              const monthEnd = dayjs()
                .endOf("month")
                .add(1, "day")
                .format("YYYY-MM-DD");

              const result = await rawQuery(
                `{
                kewajiban(order_by: [{tipe_pembayaran: asc}, {id: asc}], 
                  where: {kelas: {_has_keys_any: ${JSON.stringify(kelas)}}}) {
                  id
                  nama_kewajiban
                  nominal
                  tipe_pembayaran
                  kelas
                  transaksi(
                    where: {
                      kewajiban: {
                        _or:[
                          {_and:[
                            {tipe_pembayaran:{_eq:"Bulanan"}},
                            {transaksi: {
                               _and:[
                                {tstamp: {_gte: "${monthStart}"}},
                                {tstamp: {_lte: "${monthEnd}"}},
                              ] 
                            }}
                          ]},
                          {tipe_pembayaran:{_eq:"Insidentil"}}
                        ]
                      }
                    }
                  ) {
                    id
                    status
                    tstamp
                    detail
                  }
                }  
              }`
              );
              data.list = result.kewajiban.map((item: any) => {
                Object.keys(item.kelas).forEach((i: any) => {
                  const k = item.kelas[i];
                  if (
                    kelas.indexOf(k.id + "") >= 0 &&
                    k.nominal !== undefined
                  ) {
                    item.nominal = k.nominal * 1;
                  }
                  k.murid.forEach((m: any) => {
                    if (m && session.murid && m.id === session.murid.id) {
                      if (m.nominal !== undefined) {
                        item.nominal = m.nominal * 1;
                      }
                    }
                  });
                }); 

                item.status = "Belum Lunas";
                item.transaksi.forEach((t: any) => {
                  if (t.paid === "success") {
                    item.status = "Lunas";
                  }
                });

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

export default StackNav({
  Kewajiban: { screen: Kewajiban },
  KewajibanDetail: { screen: KewajibanDetail }
});
