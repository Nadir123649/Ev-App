import AccountSetting from "../../pages/accountsetting/index.jsx";
import AddCars from "../../pages/addnewcar/index.jsx";
import CarDetails from "../../pages/cardetails/index.jsx";
import ChargingHistory from "../../pages/charginghistory/index.jsx";
import EditHistory from "../../pages/edithistory/index.jsx";
import Home from "../../pages/home/index.jsx";
import Login from "../../pages/login/index.jsx";
import ProfileSetting from "../../pages/profilesetting.jsx/index.jsx";
import Signup from "../../pages/singup/index.jsx";
import StationView from "../../pages/stationview/index.jsx";
import Tracking from "../../pages/tracking/index.jsx";
import {
  login,
  singup,
  home,
  stationview,
  addnew,
  profilesetting,
  accountsetting,
  charginghistory,
  edithistory,
  cardetails,
  tracking,
} from "../pathName.jsx";

const authRoutes = [
  {
    title: "Login",
    component: Login,
    path: login,
  },
  {
    title: "singup",
    component: Signup,
    path: singup,
  },
  {
    title: "Home",
    component: Home,
    path: home,
  },
  {
    title: "Stationview/:id",
    component: StationView,
    path: stationview,
  },
  {
    title: "tracking/:id",
    component: Tracking,
    path: tracking,
},
  {
    title: "addnew",
    component: AddCars,
    path: addnew,
  },
  {
    title: "Profilesetting",
    component: ProfileSetting,
    path: profilesetting,
  },
  {
    title: "Accountsetting",
    component: AccountSetting,
    path: accountsetting,
  },
  {
    title: "Charginghistory",
    component: ChargingHistory,
    path: charginghistory,
  },
  {
    title: "edithistory",
    component: EditHistory,
    path: edithistory,
  },
  {
    title: "myev",
    component: CarDetails,
    path: cardetails,
  },
];

export default authRoutes;
