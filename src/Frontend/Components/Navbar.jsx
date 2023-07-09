import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
export function Navbar(){

	const {handleLogout}=useContext(AuthContext)

	return (
		<nav>
			<NavLink className='nav_item' to='/'>WeShare</NavLink>
			<ul className="nav_list">
				{/* <li>
					<NavLink className='nav_item' to='/profile'>Profile</NavLink>
				</li> */}
				<li>
					<NavLink className='nav_item' onClick={handleLogout}>Logout</NavLink>
				</li>
			</ul>

		</nav>	
	)
}