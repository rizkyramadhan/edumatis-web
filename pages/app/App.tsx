import StackNav from "@app/libs/nav/StackNav";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SiswaHome from "./screens/siswa/Home";
import AdminHome from "./screens/admin/Home";

export default StackNav(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    Admin: { screen: AdminHome },
    Siswa: { screen: SiswaHome },
  },
  {},
  true
);
