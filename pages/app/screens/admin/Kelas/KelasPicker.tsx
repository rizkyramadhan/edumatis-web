import rawQuery from "@app/libs/queries/crud/rawQuery";
import UICol from "@app/libs/ui/UICol";
import UIField from "@app/libs/ui/UIField";
import UIFieldSelectNative from "@app/libs/ui/UIFieldSelectNative";
import UIRow from "@app/libs/ui/UIRow";
import { getUnique } from "@app/libs/utils/GraphQL";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default observer(
  ({ form, renderMurid, renderKelas, renderKelasTitle }: any) => {
    const data = useObservable({
      expandKelas: [] as any,
      kelas: [] as any,
      kelasMurid: {} as any
    });
    useEffect(() => {
      data.kelas = [];
      rawQuery(`{
        kelas {
          id 
          nama_kelas
        }
      }`).then((res: any) => {
        data.kelas = res.kelas;
      });
    }, []);

    return (
      <UIRow>
        <UICol size={6} sizexs={12} sizesm={12} sizemd={12}>
          <UIField label="Berlaku untuk kelas:">
            {data.kelas &&
              data.kelas.map((k: any, index: number) => {
                const allkelas = form.kelas || {};
                const kelas = allkelas[k.id];
                return (
                  <View
                    key={k.id}
                    style={{
                      borderBottomWidth:
                        index + 1 === data.kelas.length ? 0 : 1,
                      marginHorizontal: -12,
                      padding: 5,
                      paddingHorizontal: 12,
                      borderBottomColor: "#ddd"
                    }}
                  >
                    <TouchableOpacity
                      onPress={async () => {
                        if (!data.kelasMurid[k.id]) {
                          let res: any = await rawQuery(`{
                                murid(where: {kelas_murids: {kelas_id: {_eq: ${
                                  k.id
                                }}}}) {
                                  id
                                  nama_murid
                                }
                              }
                              `);
                          if (res && res.murid) {
                            const kelasMurid = res.murid.map((m: any) => {
                              return {
                                value: m.id,
                                label: m.nama_murid
                              };
                            });
                            data.kelasMurid[k.id] = [
                              { value: 0, label: "" },
                              ...kelasMurid
                            ];
                          }
                        }
                        if (kelas) {
                          data.expandKelas = [k.id];
                        } else {
                          allkelas[k.id] = {
                            nominal: form.nominal,
                            murid: [{}]
                          };
                          data.expandKelas = [k.id];
                        }
                      }}
                    >
                      <Text style={{ fontSize: 17, height: 25 }}>
                        {kelas ? "☑" : "☐"}
                        &nbsp;
                        {k.nama_kelas}
                      </Text>
                    </TouchableOpacity>

                    {kelas && (
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 30,
                          alignItems: "center",
                          position: "absolute",
                          right: 10
                        }}
                      >
                        {renderKelasTitle && renderKelasTitle(kelas, k)}
                        <TouchableOpacity
                          onPress={() => {
                            allkelas[k.id] = undefined;
                          }}
                        >
                          <Text style={{ color: "red" }}> Hapus</Text>
                        </TouchableOpacity>
                      </View>
                    )}

                    {kelas &&
                      (data.expandKelas.indexOf(k.id) >= 0 && (
                        <View>
                          {renderKelas && renderKelas(kelas, k)}
                          {kelas.murid.map((murid: any, midx: number) => {
                            return (
                              <UIRow
                                key={midx}
                                style={{ flexDirection: "row" }}
                              >
                                <UICol size={6}>
                                  <UIFieldSelectNative
                                    label="Murid"
                                    items={data.kelasMurid[k.id] || []}
                                    value={murid.id || 0}
                                    setValue={(value: any) => {
                                      value = parseInt(value);
                                      murid.id = value;

                                      const unique = getUnique(
                                        kelas.murid,
                                        "id"
                                      ).filter(m => {
                                        return m.id !== 0;
                                      });
                                      kelas.murid.splice(0, kelas.murid.length);

                                      unique.forEach(m => {
                                        kelas.murid.push(m);
                                      });
                                      kelas.murid.push({ id: 0 });
                                    }}
                                  />
                                </UICol>

                                {renderMurid && renderMurid(murid, kelas, k)}
                              </UIRow>
                            );
                          })}
                        </View>
                      ))}
                  </View>
                );
              })}
          </UIField>
        </UICol>
      </UIRow>
    );
  }
);
