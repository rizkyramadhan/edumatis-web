import Kewajiban from "./Kewajiban/Kewajiban";
import SideBar from "./SideBar";
import SideNav from "@app/libs/nav/SideNav";
import Pengumuman from "./Pengumuman/Pengumuman";
import UbahPassword from "./UbahPassword";

export default SideNav(
  {
    Kewajiban: { screen: Kewajiban },
    Pengumuman: { screen: Pengumuman },
    UbahPassword: { screen: UbahPassword }
  },
  {
    contentComponent: SideBar
  }
);
