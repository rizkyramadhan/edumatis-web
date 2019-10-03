import login from '@app/libs/queries/user/login';
import { flow, types } from 'mobx-state-tree';
import AsyncStorage from '@app/libs/utils/AsyncStorage';
import { UserRecord } from './User';
import List from '@app/libs/utils/List';
import Record from '@app/libs/utils/Record';
import config from '@app/libs/config';
import rawQuery from '@app/libs/queries/crud/rawQuery';

export const SessionRecord = Record({
  tableName: 'session',
  columns: {
    id: types.maybe(types.string),
    client_id: types.maybe(types.integer),
    user: UserRecord
  },
  actions: (self: any) => ({
    login: flow(function*(client_id, username, password) {
      try {
        const response: any = yield login(client_id, username, password);
        yield AsyncStorage.setItem('SESSION', JSON.stringify(response));
        const result: any = yield rawQuery(`{
          kelas_murid(where: {murid_id: {_eq: ${response.murid.id}}}) {
            kelas {
              sekolah {
                id
                margin
                nama_sekolah
              }
              nama_kelas
              id
            }
          }
        }`);
        if (result) {
          response.kelas = {
            id: result.kelas_murid[0].kelas.id,
            nama: result.kelas_murid[0].kelas.nama_kelas
          };

          response.sekolah = {
            id: result.kelas_murid[0].kelas.sekolah.id,
            margin: result.kelas_murid[0].kelas.sekolah.margin,
            nama: result.kelas_murid[0].kelas.sekolah.nama_sekolah
          };
        }
        yield AsyncStorage.setItem('SESSION', JSON.stringify(response));
        return response;
      } catch (e) {
        console.warn(e);
        return false;
      }
    }),
    restore: function(session: any) {
      self.id = session.id;
      self[config.table + '_id'] = session[config.table + '_id'];
      self[config.table] = session[config.table];
    },
    logout: flow(function*() {
      yield AsyncStorage.removeItem('SESSION');
      self.id = null;
      self[config.table + '_id'] = null;
      self[config.table] = null;
    })
  })
});

export const SessionList = List({
  record: SessionRecord,
  query: `{
    id
    user_id
  }`
});
