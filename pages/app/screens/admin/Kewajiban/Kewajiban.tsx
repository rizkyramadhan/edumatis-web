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
import KewajibanDetail from "./KewajibanDetail";

const Kewajiban = observer(({ navigation }: any) => {
  const data = useObservable({
    list: [],
    loading: true
  });
  useEffect(() => {
    let fetch = async () => {
      const result = await rawQuery(`{
        kewajiban(order_by: [{tipe_pembayaran: asc},{id: asc}, ]) {
          id
          nama_kewajiban
          nominal
          tipe_pembayaran
        }
      }
      
      `);
      data.list = result.kewajiban;
      data.loading = false;
    };
    fetch();
  }, []);
  return (
    <UIContainer>
      <UIHead 
        navigation={navigation} title="Kewajiban">
        <UIButton
          size="small"
          onPress={() => {
            navigation.navigate("KewajibanDetail", {
              item: {
                nominal: 100000,
                kelas: {}
              }
            });
          }}
        >
          + Kewajiban Baru
        </UIButton>
      </UIHead>
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
                    Rp {item.nominal.toLocaleString()}
                  </Text>
                </View>
                <View>
                  <Text>{item.tipe_pembayaran}</Text>
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
  Kewajiban: { screen: Kewajiban },
  KewajibanDetail: { screen: KewajibanDetail }
});
