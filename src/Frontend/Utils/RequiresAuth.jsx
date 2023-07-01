import { Navigate, useLocation } from "react-router"
import { useContext, useEffect } from "react"

import { AuthContext } from "../../index"


export function RequiresAuth({children}){
	const {isLoggedIn,setIsLoggedIn,token} =useContext(AuthContext);

	const location=useLocation();
	return isLoggedIn?children:<Navigate to='/login' state={{from:location}}></Navigate>
}