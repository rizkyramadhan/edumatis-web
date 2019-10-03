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
import PengumumanDetail from "./PengumumanDetail";

const Pengumuman = observer(({ navigation }: any) => {
  const data = useObservable({
    list: [],
    loading: true
  });
  useEffect(() => {
    let fetch = async () => {
      const result = await rawQuery(`{
        pengumuman(order_by: {status: asc, id: asc}) {
          id
          pengumuman
          tgl
          status
          kelas
        }
      }`);
      if (result && result.pengumuman) {
        data.list = result.pengumuman;
      }
      data.loading = false;
    };
    fetch();
  }, []);
  return (
    <UIContainer>
      <UIHead 
        navigation={navigation} title="Pengumuman">
        <UIButton
          size="small"
          onPress={() => {
            navigation.navigate("PengumumanDetail", {
              item: {
                kelas: {}
              }
            });
          }}
        >
          + Pengumuman Baru
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
                  navigation.navigate("PengumumanDetail", {
                    item: item
                  });
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "#555" }}
                  >
                    {item.pengumuman}
                  </Text>
                </View>
                <View>
                  <Text>{item.status}</Text>
                </View>
              </UIListItem>
            );
          }}
        />
        <View></View>
      </UIBody>
    </UIContainer>
  );
});

export default StackNav({
  Pengumuman: { screen: Pengumuman },
  PengumumanDetail: { screen: PengumumanDetail },
});
