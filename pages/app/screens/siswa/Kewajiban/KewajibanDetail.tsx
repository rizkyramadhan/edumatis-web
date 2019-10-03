import createRecord from '@app/libs/queries/crud/createRecord';
import updateRecord from '@app/libs/queries/crud/updateRecord';
import { getSession } from '@app/libs/queries/user/getsetSession';
import UIContainer from '@app/libs/ui/UIContainer';
import UIHead from '@app/libs/ui/UIHead';
import UIWebView from '@app/libs/ui/UIWebView';
import dayjs from 'dayjs';
import { toJS } from 'mobx';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default observer(({ navigation }: any) => {
  const data = useObservable({
    error: '',
    form: (navigation || { getParam: () => ({ transaksi: [] }) }).getParam(
      'item'
    )
  });
  let transaksi: any = {};
  if (data.form.transaksi.length > 0) {
    transaksi = data.form.transaksi[0];
  }
  useEffect(() => {
    const req = async function() {
      const session = await getSession();
      const nominalBeda =
        data.form.status === 'Belum Lunas' &&
        transaksi &&
        transaksi.detail &&
        parseInt(transaksi.detail.amount) !== parseInt(data.form.nominal);

      const expired =
        data.form.status === 'Belum Lunas' &&
        transaksi &&
        transaksi.detail &&
        dayjs(transaksi.detail.expiry_date).isBefore(dayjs());

      if (!transaksi || !transaksi.detail || nominalBeda || expired) {
        if (!transaksi || !transaksi.detail) {
          let res = await createRecord('transaksi', {
            kewajiban_id: toJS(data.form.id)
          });
          data.form.transaksi.push({ id: res });
          transaksi = data.form.transaksi[0];
          transaksi.id = res;
        }

        if (nominalBeda) {
          data.form.transaksi[0].detail = null;
        }
        var params: any = {
          external_id: transaksi.id,
          payer_email: session.murid.email || `j@edumatis.id`,
          description: `${session.sekolah.nama} - ${session.kelas.nama} - ${session.murid.nama_murid} - ${data.form.nama_kewajiban}`,
          amount: parseInt(data.form.nominal) + parseInt(session.sekolah.margin)
        };

        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');
        const response: Response = await fetch(
          `https://backend.cap.edumatis.id/invoice`,
          {
            method: 'POST',
            body: JSON.stringify(params),
            headers: myHeaders
          }
        );

        if (response.status !== 200) {
          const json = await response.json();
          data.error = (json as any).message;
          return;
        }
        const json = await response.json();
        await updateRecord('transaksi', {
          id: transaksi.id,
          nominal: data.form.nominal,
          detail: json
        });

        data.form.transaksi[0].detail = json;
      }
    };
    req();
  }, []);

  return (
    <UIContainer style={{ backgroundColor: '#F5FAFD' }}>
      <UIHead
        navigation={navigation}
        title={`${data.form.nama_kewajiban} (${data.form.status})`}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {data.error === '' && !transaksi.detail && (
          <Text>Membuat Invoice...</Text>
        )}
        {data.error != '' && <Text>{data.error}</Text>}
        {data.error === '' && transaksi.detail && !transaksi.paid && (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
          >
            <UIWebView
              style={{ flex: 1 }}
              source={{
                html: `
            <!DOCTYPE html>
            <html>
                <head>
                <meta name="viewport" content=" initial-scale=1">
                </head> 
                <body>
                <center style="margin:100px">Memuat<br/> Instruksi Pembayaran...</center>
                <iframe 
                style="position:absolute;left:0;right:0;bottom:0;top:0;"
                width="100%" height="100%" src="${transaksi.detail.invoice_url}"  frameborder="0"></iframe></div> 
            </body>
            </html>`
              }}
            />
          </View>
        )}
      </View>
    </UIContainer>
  );
});
