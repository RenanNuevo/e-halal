import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

// import InnerContent from "./components/InnerContent"
// import Dashboard from "./components/Dashboard"
// import Tabs from "./components/Tabs"
// import Settings from "./components/Settings"
import Login from "./components/Login"
import Dashboard from "./dashboard/dashboard";
import Orders from "./dashboard/pages/Orders";
import Menu from "./dashboard/pages/Menu";
import Surcharges from "./dashboard/pages/Surcharges";
import Offers from "./dashboard/pages/Offers";
import Ewallet from "./dashboard/pages/Ewallet";
import Analytics from "./dashboard/pages/Analytics";
import POS from "./dashboard/pages/POS";
import Ads from "./dashboard/pages/Ads";
import Settings from "./dashboard/pages/Settings";
// import Ads from "./dashboard/pages/Ads";
// import Ads from "./dashboard/pages/Ads";
import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SignupPage from './components/Signup';
import LoginPage from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import ConfirmChangePassword from './components/ConfirmChangePassword';
import ResetPassword from './components/ResetPassword';
// import Users from "./components/Users"
// import SingleUser from "./components/SingleUser"
// import NewUser from "./components/NewUser"
// import DynamicForm from "./components/DynamicForm"

// import Tab1 from "./components/Tab1"
// import Tab2 from "./components/Tab2"
// import Tab3 from "./components/Tab3"

// import PublicRoutes from "./components/PublicRoutes"
// import PermissionDenied from "./components/PermissionDenied"

const MainRoutes = () => (
	<Routes>
		{/** Protected Routes */}
		{/** Wrap all Route under ProtectedRoutes element */}
		{/* <Route path="/" > */}
                <Route element={<ProtectedRoutes />}>
                    {/* <Route path="/" element={<Navigate replace to="dashboard" />} /> */}
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="surcharges" element={<Surcharges />} />
                    <Route path="ads" element={<Ads />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="e-wallet" element={<Ewallet />} />
                    <Route path="pos" element={<POS />} />
                    <Route path="offers" element={<Offers />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

		{/** Public Routes */}
		{/** Wrap all Route under PublicRoutes element */}
		<Route path="/" element={<Login />} >
			<Route path="login" element={<Login />} />
		</Route>
        <Route path="signup" element={<SignupPage/>} />
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="confirm-change-password" element={<ConfirmChangePassword/>} />
        <Route path="change-password" element={<ChangePassword/>} />
        <Route path="reset-password" element={<ResetPassword/>} />

		{/** Permission denied route */}
		{/* <Route path="/denied" element={<PermissionDenied />} /> */}
	</Routes>
)

export default MainRoutes
