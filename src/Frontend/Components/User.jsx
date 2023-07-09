import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { AuthContext, PostContext, ProfileContext } from "../../index"
import axios from "axios";

export function User(){
	const {getProfileData,profileData,setProfileData,showAvatars,setShowAvatars,showEditProfile,setShowEditProfile,avatar,bio,website}=useContext(ProfileContext)

	const {id}=useParams();

	useEffect(()=>{
		getProfileData(id);
	},[])

	return (
		<div className="user">
			<img src={avatar} alt="profile" />

			
			<h3>{profileData.firstName + ' ' + profileData.lastName}</h3>
			<small>@{profileData.username}</small>
		

			<p>{bio}</p>
			<a href="">{website}</a>

			
			
			<div className="profile-btns">
			{
				!showEditProfile && <button onClick={()=>{
					setShowEditProfile(true);
				}}>Edit Profile</button>
			}

			{
				!showAvatars && <button onClick={()=>{
					setShowAvatars(true);
				}}>Add avatars</button>
			}

			</div>

			<ul>
				<li><span>{profileData.following.length}</span> <span>Following</span></li>
				{/* <li><span>{userPosts.length}</span>  <span>Posts</span></li> */}
				<li><span>{profileData.followers.length}</span> <span>Followers</span> </li>
			</ul>
			
		</div>	
	)
}