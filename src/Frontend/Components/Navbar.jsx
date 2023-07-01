import { NavLink } from "react-router-dom";
export function Navbar(){
	return (
		<nav>
			<NavLink className='nav_item' to='/'>MyWebsite</NavLink>
			<ul className="nav_list">
				{/* <li>
					<NavLink className='nav_item' to='/profile'>Profile</NavLink>
				</li> */}
				<li>
					<NavLink className='nav_item' to='/logout'>Logout</NavLink>
				</li>
			</ul>

		</nav>	
	)
}