import UIButton from '@app/libs/ui/UIButton';
import UIImage from '@app/libs/ui/UIImage';
import UIList from '@app/libs/ui/UIList';
import UIListItem from '@app/libs/ui/UIListItem';
import { observer, useObservable } from 'mobx-react-lite';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { toJS } from 'mobx';

export default observer(
  (data: { kelas: any; list: any[]; loading: boolean; navigation: any }) => {
    const meta = useObservable({
      checked: [] as any
    });
    if (!data.list) return null;

    return (
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            borderBottomColor: '#ddd',
            borderBottomWidth: 2,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ color: '#999' }}>
            Total Murid: {data.list.length}
            {meta.checked.length > 0 &&
              ` • Murid Terpilih: ${meta.checked.length}`}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {false && meta.checked.length > 0 && (
              <UIButton
                size='small'
                fill='outline'
                style={{ margin: 0, marginLeft: 8 }}
                labelStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingHorizontal: 0
                }}
              >
                <UIImage
                  source={require('@app/imgs/move.png')}
                  style={{ width: 18, height: 18, marginLeft: 8 }}
                />
                Pindah Ke Kelas Lain
              </UIButton>
            )}
            <UIButton
              size='small'
              fill='outline'
              style={{ margin: 0, marginLeft: 8 }}
              labelStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 2,
                paddingBottom: 2,
                paddingHorizontal: 0
              }}
              onPress={() => {
                let hasDetail = false;
                const list = toJS(data.list);
                list.forEach(item => {
                  if (item.data && item.data.nik) {
                    hasDetail = true;
                  }
                });

                const header: any = [];
                const finalList: any = [];

                header.push('nisn');
                header.push('nsa');
                header.push('nama_lengkap');
                header.push('tgl_lahir');

                if (hasDetail) {
                  list.forEach(item => {
                    if (item.data && item.data.nik) {
                      for (let i in item.data) {
                        header.push(i);
                      }
                    }
                  });
                }

                finalList.push(header);
                list.forEach(item => {
                  const row: any = [];
                  row.push(item['nisn']);
                  row.push(item['nsa']);
                  row.push(item['nama_murid']);
                  row.push(item['tgl_lahir']);
                  if (item.data && item.data.nik) {
                    for (let i in item.data) {
                      row.push(item.data[i]);
                    }
                  }
                  finalList.push(row);
                });
                console.log(finalList);

                var finalVal = '';
                for (var i = 0; i < finalList.length; i++) {
                  var value = finalList[i];

                  for (var j = 0; j < value.length; j++) {
                    var innerValue =
                      value[j] === null ? '' : value[j].toString();
                    var result = innerValue.replace(/"/g, '""');
                    if (result.search(/("|,|\n)/g) >= 0)
                      result = '"' + result + '"';
                    if (j > 0) finalVal += ',';
                    finalVal += result;
                  }

                  finalVal += '\n';
                }
                var pom = document.createElement('a');
                var csvContent = finalVal; //here we load our csv data
                var blob = new Blob([csvContent], {
                  type: 'text/csv;charset=utf-8;'
                });
                var url = URL.createObjectURL(blob);
                pom.href = url;
                pom.setAttribute(
                  'download',
                  `Kelas_${data.kelas.nama_kelas.replace(/[\W_]+/g, '_')}.csv`
                );
                pom.click();
              }}
            >
              <UIImage
                source={require('@app/imgs/share.png')}
                style={{ width: 12, height: 12, marginLeft: 8 }}
              />
              Export CSV
            </UIButton>
            <UIButton
              size='small'
              style={{ margin: 0, marginLeft: 8 }}
              labelStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 2,
                paddingBottom: 2,
                paddingHorizontal: 0
              }}
              onPress={() => {
                data.navigation.navigate('MuridDetail', {
                  item: {},
                  kelas: data.kelas
                });
              }}
            >
              <UIImage
                source={require('@app/imgs/plus.png')}
                style={{ width: 12, height: 12, marginLeft: 8 }}
              />
              Tambah Siswa
            </UIButton>
          </View>
        </View>
        <UIList
          data={data.list}
          extraData={meta.checked.length}
          loading={data.loading}
          render={(list: any) => {
            const item = list.item;
            return (
              <View
                style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
              >
                <TouchableOpacity
                  style={{
                    height: 60,
                    paddingLeft: 10,
                    paddingRight: 3,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onPress={() => {
                    const idx = meta.checked.indexOf(parseInt(item.id));
                    if (idx >= 0) {
                      meta.checked.splice(idx, 1);
                    } else {
                      meta.checked.push(parseInt(item.id));
                    }
                  }}
                >
                  <Text style={{ fontSize: 20 }}>
                    {meta.checked.indexOf(parseInt(item.id)) >= 0 ? '☑' : '☐'}
                  </Text>
                </TouchableOpacity>
                <UIListItem
                  style={{
                    height: 60,
                    flex: 1
                  }}
                  onPress={() => {
                    data.navigation.navigate('MuridDetail', {
                      item,
                      kelas: data.kelas
                    });
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{
                        paddingRight: 10,
                        fontSize: 17,
                        fontWeight: 'bold'
                      }}
                    >
                      {list.index + 1}
                    </Text>
                    <View>
                      <Text style={{ fontSize: 16 }}>{item.nama_murid}</Text>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Text style={{ fontSize: 13 }}>
                          {item.is_active === 'y' ? 'Aktif' : 'Non-Aktif'}
                          &nbsp; &bull; &nbsp;
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            color: !item.data ? '#ccc' : 'green'
                          }}
                        >
                          {item.data ? `Data diri tersedia` : `Tanpa data diri`}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#999',
                        textAlign: 'right'
                      }}
                    >
                      NSA: {item.nsa}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#999',
                        textAlign: 'right'
                      }}
                    >
                      NISN: {item.nisn}
                    </Text>
                  </View>
                </UIListItem>
              </View>
            );
          }}
        />
      </View>
    );
  }
);
