import SideNav from "@app/libs/nav/SideNav";
import Kewajiban from "./Kewajiban/Kewajiban";
import SideBar from "./SideBar";
import Pengumuman from "./Pengumuman/Pengumuman";
import Kelas from "./Kelas/Kelas";
import Transaksi from "./Transaksi/Transaksi";
import Report from './Report';
import EditProfile from './EditProfile';

export default SideNav(
  {
    Transaksi: { screen: Transaksi },
    Kewajiban: { screen: Kewajiban },
    Pengumuman: { screen: Pengumuman },
    Kelas: { screen: Kelas },
    Report: { screen: Report },
    EditProfile: { screen: EditProfile }
  },
  {
    contentComponent: SideBar
  }
);
