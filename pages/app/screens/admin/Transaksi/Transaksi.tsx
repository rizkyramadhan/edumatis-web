import rawQuery from "@app/libs/queries/crud/rawQuery";
import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIList from "@app/libs/ui/UIList";
import UIListItem from "@app/libs/ui/UIListItem";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import StackNav from "@app/libs/nav/StackNav";
import TransaksiDetail from "./TransaksiDetail";
const dayjs = require("dayjs");
import RelativeTime from "dayjs/plugin/relativeTime";
import get from "lodash.get";

dayjs.extend(RelativeTime);
const Transaksi = observer(({ navigation }: any) => {
  const data = useObservable({
    list: [],
    loading: true
  });
  useEffect(() => {
    let fetch = async () => {
      const result = await rawQuery(`{
        transaksi(order_by: {tstamp: asc}) {
          id
          status
          tstamp
          amount: detail(path:"amount")
          detail(path:"status")
          paid(path:"status")
          murid {
            id
            nama_murid
            nsa
            kelas_murids {
              kelas {
                nama_kelas
              }
            }
          }
          kewajiban {
            nama_kewajiban
          }
        }
      }
      `);
      data.list = result.transaksi;
      data.loading = false;
    };
    fetch();
  }, []);

  return (
    <UIContainer>
      <UIHead navigation={navigation} title="Transaksi">
        <UIButton
          size="small"
          onPress={() => {
            navigation.navigate("TransaksiDetail", {
              item: {
                nominal: 100000,
                kelas: {}
              }
            });
          }}
        >
          + Transaksi Baru
        </UIButton>
      </UIHead>
      <UIBody>
        <UIList
          data={data.list}
          loading={data.loading}
          render={(list: any) => {
            const item = list.item;

            const tgl = dayjs(item.tstamp);
            const fromday = tgl.fromNow();
            const kelas =
              get(item, "murid.kelas_murids[0].kelas.nama_kelas") ||
              "Semua Kelas";
            const nominal = parseInt(item.amount || item.nominal);
            let status = (item.paid || item.detail || item.status).toLowerCase();
            if (status === "paid") status = "success";
            
            return (
              <UIListItem
                onPress={() => {
                  navigation.navigate("TransaksiDetail", {
                    item: item
                  });
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "#555" }}
                  >
                    #{item.id} {item.kewajiban.nama_kewajiban} - Rp{" "}
                    {(nominal || 0).toLocaleString()}{" "}
                    ({status})
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    {item.murid.nama_murid} - {kelas}
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text>{fromday}</Text>
                  <Text style={{ fontSize: 12 }}>
                    {tgl.format("DD MMM YYYY - hh.mm")}
                  </Text>
                </View>
              </UIListItem>
            );
          }}
        />
      </UIBody>
    </UIContainer>
  );
});

export default StackNav({
  Transaksi: { screen: Transaksi },
  TransaksiDetail: { screen: TransaksiDetail }
});
