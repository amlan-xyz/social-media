import { Navigate, useLocation } from "react-router"
import { useContext } from "react"

import { AuthContext } from "../../index"



export function RequiresAuth({children}){
	const {isLoggedIn} =useContext(AuthContext);


	
	const location=useLocation();


// 	  return localStorage.getItem("encodedToken") ? (
//     children
//   ) : (
//     <Navigate to="/login" state={{ from: location }}></Navigate>
//   );
	return isLoggedIn?children:<Navigate to='/login' state={{from:location}}></Navigate>
}

