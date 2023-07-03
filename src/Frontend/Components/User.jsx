import { useContext, useEffect, useState } from "react"


import { AuthContext, PostContext, ProfileContext } from "../../index"
import axios from "axios";

export function User({user}){
	const {showAvatars,setShowAvatars,showEditProfile,setShowEditProfile,avatar,bio,website}=useContext(ProfileContext)

	const {token}=useContext(AuthContext)

	const {userPosts}=useContext(PostContext)

	const [following,setFollowing]=useState([]);
	const [followers,setFollowers]=useState([]);

	const getFollowers=async()=>{
		const {data}=await axios.get(`/api/users/${user._id}`,{
			headers:{authorization:token}
		})
		setFollowers(data.user.followers.length);
		setFollowing(data.user.following.length);
	}

	useEffect(()=>{
		getFollowers();
	},[])

	return (
		<div className="user">
			<img src={avatar} alt="profile" />

			
			<h3>{user.firstName + ' ' + user.lastName}</h3>
			<small>@{user.username}</small>
			
		

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
				<li><span>{following}</span> <span>Following</span></li>
				<li><span>{userPosts.length}</span>  <span>Posts</span></li>
				<li><span>{followers}</span> <span>Followers</span> </li>
			</ul>
			
		</div>	
	)
}