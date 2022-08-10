import React from "react"

import {Navigate, Outlet} from "react-router-dom"
import SideBar from "../components/Sidebar";
import sidebar_menu from "../constants/sidebar-menu";

const useAuth = () => {
	//get item from localstorage

	let user;

	const _user = localStorage.getItem("user")

	if (_user) {
		user = JSON.parse(_user)
		console.log("user", user)
	}
	if (user) {
		return {
			auth: true,
			role: user.role,
		}
	} else {
		return {
			auth: false,
			role: null,
		}
	}
}

const ProtectedRoutes = (props) => {
	const {auth, role} = useAuth()

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />
            <main className='dashboard-body'>
            {
                auth ? <Outlet /> : <Navigate to="/login" />
            }
            </main>
        </div>

    )
	//if the role required is there or not
	// if (props.roleRequired) {
	// 	<SideBar />
	// 	return auth ? (
	// 		props.roleRequired === role ? (
	// 			<Outlet />
	// 		) : (
	// 			<Navigate to="/denied" />
	// 		)
	// 	) : (
	// 		<Navigate to="/login" />
	// 	)
	// } else {
	// 	return auth ? <Outlet /> : <Navigate to="/login" />
	// }
}

export default ProtectedRoutes;
