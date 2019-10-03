import StackNav from "@app/libs/nav/StackNav";
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
import KelasDetail from "./KelasDetail";
import MuridDetail from "./MuridDetail";

const Kelas = observer(({ navigation }: any) => {
  const data = useObservable({
    list: [],
    loading: true
  });
  useEffect(() => {
    let fetch = async () => {
      const result = await rawQuery(`{
        kelas(order_by: {id: asc}) {
          id
          kelas_murids_aggregate {
            aggregate {
              count
            }
          }
          nama_kelas
        }
      }
      `);
      if (result && result.kelas) {
        data.list = result.kelas;
      }
      data.loading = false;
    };
    fetch();
  }, []);
  return (
    <UIContainer>
      <UIHead navigation={navigation} title="Kelas">
        <UIButton
          size="small"
          onPress={() => {
            navigation.navigate("KelasDetail", {
              item: {}
            });
          }}
        >
          + Kelas Baru
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
                  navigation.navigate("KelasDetail", {
                    item: item
                  });
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "#555" }}
                  >
                    {item.nama_kelas}
                  </Text>
                  <Text>
                    {`${item.kelas_murids_aggregate.aggregate.count} murid`}
                  </Text>
                </View>
                <View>
                  <Text />
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
  Kelas: { screen: Kelas },
  MuridDetail: { screen: MuridDetail },
  KelasDetail: { screen: KelasDetail }
});
