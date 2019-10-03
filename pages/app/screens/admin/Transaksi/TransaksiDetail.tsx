import UIBody from '@app/libs/ui/UIBody';
import UICol from '@app/libs/ui/UICol';
import UIContainer from '@app/libs/ui/UIContainer';
import UIHead from '@app/libs/ui/UIHead';
import UIRow from '@app/libs/ui/UIRow';
import { observer, useObservable } from 'mobx-react-lite';
import React from 'react';
import { Text } from 'react-native';

export default observer(({ navigation }: any) => {
  const data = useObservable({
    form: (navigation || { getParam: () => ({}) }).getParam('item')
  });
  const item = data.form;
  const nominal = parseInt(item.amount || item.nominal || 0);
  let status = (item.paid || item.detail || item.status || '').toLowerCase();
  if (status === 'paid') status = 'success';

  return (
    <UIContainer>
      <UIHead
        navigation={navigation}
        title={`#${item.id} ${
          (item.kewajiban || '').nama_kewajiban
        } - Rp ${nominal.toLocaleString()}`}
        onBack={() => {
          navigation.goBack();
        }}
      />

      {status !== '' && (
        <UIBody>
          <UIRow>
            <UICol size={1} sizexs={4} sizemd={4}>
              Siswa:
            </UICol>
            <UICol size={11} sizexs={8} sizemd={8}>
              {item.murid.nama_murid}
            </UICol>
          </UIRow>
          <UIRow>
            <UICol size={1} sizexs={4} sizemd={4}>
              Kelas:
            </UICol>
            <UICol size={11} sizexs={8} sizemd={8}>
              {item.murid.kelas_murids[0].kelas.nama_kelas || 'Semua Kelas'}
            </UICol>
          </UIRow>
          <UIRow>
            <UICol size={1} sizexs={4} sizemd={4}>
              Nominal:
            </UICol>
            <UICol size={11} sizexs={8} sizemd={8}>
              <Text>Rp {nominal.toLocaleString()}</Text>
            </UICol>
          </UIRow>
          <UIRow>
            <UICol size={1} sizexs={4} sizemd={4}>
              Status:
            </UICol>
            <UICol size={11} sizexs={8} sizemd={8}>
              {status}
            </UICol>
          </UIRow>
        </UIBody>
      )}
    </UIContainer>
  );
});
