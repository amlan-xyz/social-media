import { useContext, useState } from "react"


import { ProfileContext } from "../../index"

export function User({user}){
	const {showEditProfile,setShowEditProfile,avatar,showList,setShowList,setAvatar,bio,website}=useContext(ProfileContext)

	return (
		<div className="user">
			<img src={avatar} alt="profile" />
			
			
			<h3>{user.firstName + ' ' + user.lastName}</h3>
			<small>@handle</small>
			
			<p>{bio}</p>
			<a href="">{website}</a>
			
			{
				!showEditProfile && <button onClick={()=>{
					setShowEditProfile(true);
				}}>Edit Profile</button>
			}

			<ul>
				<li><span>0</span> <span>Following</span></li>
				<li><span>0</span>  <span>Posts</span></li>
				<li><span>0</span> <span>Followers</span> </li>
			</ul>
		</div>	
	)
}