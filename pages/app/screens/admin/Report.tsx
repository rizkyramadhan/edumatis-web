import StackNav from '@app/libs/nav/StackNav';
import rawQuery from '@app/libs/queries/crud/rawQuery';
import UIBody from '@app/libs/ui/UIBody';
import UIButton from '@app/libs/ui/UIButton';
import UICol from '@app/libs/ui/UICol';
import UIContainer from '@app/libs/ui/UIContainer';
import UIHead from '@app/libs/ui/UIHead';
import UIList from '@app/libs/ui/UIList';
import UIListItem from '@app/libs/ui/UIListItem';
import UIRow from '@app/libs/ui/UIRow';
import RelativeTime from 'dayjs/plugin/relativeTime';
import _ from 'lodash';
import get from 'lodash.get';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
const dayjs = require('dayjs');
dayjs.extend(RelativeTime);
const Report = observer(({ navigation }: any) => {
  const data = useObservable({
    listRaw: [],
    filter: {
      kewajiban: '',
      kelas: ''
    },

    loading: true
  });

  const kelasList = { '-Semua Kelas-': true };
  const kewajibanList = { '-Semua Kewajiban-': true };
  const list = data.listRaw.filter((row: any) => {
    let match = true;

    const kelas = _.get(row, 'murid.kelas_murids[0].kelas.nama_kelas');
    const kewajiban = _.get(row, 'kewajiban.nama_kewajiban');
    if (kelas && !kelasList[kelas]) {
      kelasList[kelas] = true;
    }

    if (kewajiban && !kewajibanList[kewajiban]) {
      kewajibanList[kewajiban] = true;
    }

    if (data.filter.kewajiban && data.filter.kewajiban !== '-Semua Kewajiban-') {
      if (kewajiban !== data.filter.kewajiban) {
        match = false;
      }
    }

    if (data.filter.kelas && data.filter.kelas !== '-Semua Kelas-') {
      if (kelas.trim() !== data.filter.kelas.trim()) {
        match = false;
      }
    }
    console.log(data.filter.kelas);

    return match;
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
      data.listRaw = result.transaksi;
      data.loading = false;
    };
    fetch();
  }, []);
  return (
    <UIContainer>
      <UIHead navigation={navigation} title='Laporan Transaksi'>
        <UIButton
          size='small'
          onPress={() => {
            const parse = (e: any, isRoot = false) => {
              return Object.keys(e)
                .map(r => {
                  const row = e[r] as any;
                  if (isRoot) return r;
                  return row;
                })
                .join(',');
            };

            const csvList: any = [];
            list.map(e => {
              const res: any = {};
              for (let i in e) {
                const row = e[i] as any;
                if (typeof row === 'object' && row !== null) {
                  if (row.nama_kewajiban)
                    res['nama_kewajiban'] = row.nama_kewajiban;
                  if (row.nama_murid) {
                    res['nama_murid'] = _.get(row, 'nama_murid');
                    res['nsa'] = _.get(row, 'nsa');
                    res['kelas'] = _.get(
                      row,
                      'kelas_murids.0.kelas.nama_kelas'
                    );
                  }
                } else res[i] = row;
              }
              csvList.push(res);
            });

            let csvContent =
              'data:text/csv;charset=utf-8,' +
              parse(csvList[0], true) +
              '\n' +
              csvList.map((e: any) => parse(e)).join('\n');

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'report.csv');
            document.body.appendChild(link); // Required for FF

            link.click(); // This will download the data file named "my_data.csv".
          }}
          style={{ flexDirection: 'column', alignItems: 'center', width: 150 }}
        >
          Download CSV
        </UIButton>
      </UIHead>
      <UIBody>
        <UIRow>
          <select
            style={{ margin: 10 }}
            value={data.filter.kelas}
            onChange={e => {
              data.filter.kelas = e.target.value;
            }}
          >
            {Object.keys(kelasList).map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
          </select>
          <select
            style={{ margin: 10 }}
            value={data.filter.kewajiban}
            onChange={e => {
              data.filter.kewajiban = e.target.value;
            }}
          >
            {Object.keys(kewajibanList).map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
          </select>
        </UIRow>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 25
            }}
          >
            <UIRow style={{ width: 40 }}>
              <UICol>No.</UICol>
            </UIRow>
            <UIRow style={{ width: 200 }}>
              <UICol>Nama</UICol>
            </UIRow>
            <UIRow style={{ width: 100 }}>
              <UICol>Kelas</UICol>
            </UIRow>
            <UIRow
              style={{
                width: 240
              }}
            >
              <UICol>Kewajiban</UICol>
            </UIRow>
            <UIRow
              style={{
                width: 100
              }}
            >
              <UICol>Biaya (Rp)</UICol>
            </UIRow>
            <UIRow
              style={{
                width: 100
              }}
            >
              <UICol>Status</UICol>
            </UIRow>
            <UIRow
              style={{
                width: 150
              }}
            >
              <UICol>Waktu</UICol>
            </UIRow>
            <UIRow style={{ width: 150 }}>
              <UICol>Log</UICol>
            </UIRow>
          </View>
          <UIList
            data={list}
            loading={data.loading}
            render={(list: any) => {
              const item = list.item;

              const tgl = dayjs(item.tstamp);
              const fromday = tgl.fromNow();
              const kelas =
                get(item, 'murid.kelas_murids[0].kelas.nama_kelas') ||
                'Semua Kelas';
              const nominal = parseInt(item.amount || item.nominal);
              let status = (
                item.paid ||
                item.detail ||
                item.status
              ).toLowerCase();
              if (status === 'paid') status = 'success';

              return (
                <UIListItem
                  onPress={() => {
                    navigation.navigate('TransaksiDetail', {
                      item: item
                    });
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <UIRow style={{ width: 40 }}>
                      <UICol>{item.id}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 200 }}>
                      <UICol>{item.murid.nama_murid}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 100 }}>
                      <UICol>{kelas}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 240 }}>
                      <UICol>{item.kewajiban.nama_kewajiban}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 100 }}>
                      <UICol>{(nominal || 0).toLocaleString()}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 100 }}>
                      <UICol>{status}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 150 }}>
                      <UICol>{tgl.format('DD MMM YYYY - hh.mm')}</UICol>
                    </UIRow>
                    <UIRow style={{ width: 150 }}>
                      <UICol>{fromday}</UICol>
                    </UIRow>
                  </View>
                </UIListItem>
              );
            }}
          />
        </ScrollView>
      </UIBody>
    </UIContainer>
  );
});

export default StackNav({
  Report: { screen: Report }
});
