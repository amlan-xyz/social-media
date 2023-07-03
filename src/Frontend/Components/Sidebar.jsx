import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHomeUser,faMagnifyingGlass,faBookBookmark,faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useContext } from "react";
import { PostContext } from "../Context/PostsContext";


export function Sidebar(){

	const {setCreatePost}=useContext(PostContext)
	return (
		<div className="sidebar">
			<div className="sidebar-content">
				<div className="sidebar-links">
					<ul>
						<li key='home'><Link to='/'><FontAwesomeIcon className="sidebar-icon" icon={faHomeUser}/>Home</Link></li>
						<li key='explore'><Link to='/explore'><FontAwesomeIcon icon={faMagnifyingGlass} className="sidebar-icon" /> Explore</Link></li>
						<li key='bookmarks'><Link to='/bookmarks'><FontAwesomeIcon icon={faBookBookmark} className="sidebar-icon" /> Bookmark</Link></li>
						<li key='profile'><Link to='/profile'><FontAwesomeIcon icon={faUser} className="sidebar-icon" />Profile</Link></li>
					</ul>

					{/* <button className="sidebar-btn" onClick={()=>{
						setCreatePost(true);
					}}>Create new Post</button> */}
				</div>
				<div className="sidebar-profile">
					<img src='/avatars/1.png' alt="profile" />
					<p>
						Amlan<br />
						<span>@username</span>
					</p>
				</div>
			</div>
			
		</div>	
	) 
}