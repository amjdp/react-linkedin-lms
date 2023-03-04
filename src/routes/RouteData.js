import  Login  from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Home from "../components/home/Home";

const RouteData = {
    Login: {path:"login", component:Login, isPrivate:false, menuText: "Login"},
    Signup: {path:"signup", component:Signup, isPrivate:false, menuText: "Register"},
    Home: {path:"home", component:Home, isPrivate:false, menuText: "Home"}
}

export default RouteData;