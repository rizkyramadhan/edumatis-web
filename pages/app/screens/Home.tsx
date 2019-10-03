import { createNavigateTo } from '@app/libs/nav/NavContainer';
import UIButton from '@app/libs/ui/UIButton';
import UIContainer from '@app/libs/ui/UIContainer';
import UIImage from '@app/libs/ui/UIImage';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { checkSession } from '@app/libs/queries/user/checkSession';

export default observer(({ navigation }: any) => {
  const navigateTo = createNavigateTo(navigation);
  const meta = useObservable({ loading: true });
  useEffect(() => {
    (async () => {
      const session = await checkSession();
      if (session && session.murid && session.murid.nsa) {
        if (session.murid.nsa === 'admin') {
          navigation.replace('Admin');
        } else {
          navigation.replace('Siswa');
        }
        return;
      }
      meta.loading = false;
    })();
  }, []);

  if (meta.loading) return null;

  return (
    <ScrollView
      style={{
        backgroundColor: '#fff'
      }}
    >
      <View style={{ alignSelf: 'center', flexBasis: '100%', minWidth: 400 }}>
        <UIImage
          source={require('@app/imgs/logo-edumatis_a.png')}
          mobileStyle={{ height: 150, marginBottom: -10 }}
          style={{ width: 200, alignSelf: 'center', marginTop: 50 }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: '#808080',
            marginBottom: 10
          }}
        >
          Aman . Mudah . Handal . Hemat
        </Text>

        <UIContainer>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            EDUMATIS PAYMENT SYSTEM
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              color: 'dimgrey',
              textAlign: 'center'
            }}
          >
            Sistem Pembayaran dan Keuangan Terpadu Untuk Lembaga Pendidikan
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              padding: 10,
              minWidth: 400
            }}
          >
            <Text style={{ marginTop: 20, color: 'dimgrey', fontSize: 14 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#e62129'
                }}
              >
                Tentang EDUmatis
              </Text>
              {'\n'}
              Solusi berbasis teknologi informasi terkini yang{' '}
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                efisien, efektif, akuntable, reliable
              </Text>{' '}
              dan <Text style={{}}>simple</Text> untuk berbagai layanan terkait
              dengan proses administrasi dan support proses belajar mengajar.
              {'\n'}
              Mengelola dan menjalankan layanan administrasi dan support
              prasarana belajar mengajar :{'\n'}
              <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                a. Administrasi Data Siswa dan Guru / Karyawan
              </Text>
              {'\n'}
              <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                b. Sistem Komunikasi berbasis SMS
              </Text>{' '}
              untuk siswa, orang tua siswa dan guru/karyawan{'\n'}
              <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                c. Sistem Administrasi Keuangan
              </Text>
              {'\n'}
              <Text style={{ marginLeft: 40 }}>
                i) Sistem Manajemen Keuangan Untuk Sekolah
              </Text>
              {'\n'}
              <Text style={{ marginLeft: 40 }}>
                ii) Sistem Pembayaran Biaya Sekolah online untuk siswa
              </Text>
              {'\n'}
              <Text style={{ marginLeft: 50 }}>
                - Biaya Rutin Sekolah : SPP, dan sebagainya
              </Text>
              {'\n'}
              <Text style={{ marginLeft: 50 }}>
                - Biaya Insidentil (Tidak Rutin) :Biaya Uang Gedung, Biaya Test,
                Biaya Laboratoriun, dan sebagainya
              </Text>
              {'\n'}
              <Text style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>d. Marketplace :</Text>{' '}
                Penyediaan berbagai kebutuhan pendukung kegiatan belajar
                mengajar untuk siswa, misal buku ajar, seragam sekolah dan
                sebagainya.
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20
            }}
          >
            <UIButton
              mode='contained'
              style={{
                marginTop: 20,
                width: 100,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e62129'
              }}
              onPress={() => {
                navigateTo('Login');
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
            </UIButton>
          </View>
        </UIContainer>
      </View>
    </ScrollView>
  );
});
