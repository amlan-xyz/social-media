import axios from "axios";
import { useState,createContext, useContext } from "react";
import { toast } from "react-toastify";
import {AuthContext} from '../../index'

export const ProfileContext=createContext();

export function ProfileContextProvider({children}){
	
	const [profileData,setProfileData]=useState([]);
	const [profilePosts,setProfilePosts]=useState([]);
	const [showEditProfile,setShowEditProfile]=useState(false);
	const [avatar,setAvatar]=useState('/avatars/1.png')
	const [showList,setShowList]=useState(false);
	const [editProfileInput,setEditProfileInput]=useState([]);
	const [bio,setBio]=useState([]);
	const [website,setWebsite]=useState([]);
	const [showAvatars,setShowAvatars]=useState(false);
	const [followingLength,setFollowingLength]=useState(0);
	const [followerLength,setFollowerLength]=useState(0);
	const [profileLength,setProfileLength]=useState(0);
	const {token}=useContext(AuthContext);


	const getProfileData=async(user_id)=>{
		const {data:{user}}=await axios.get(`/api/users/${user_id}`,{},{
			headers:{authorization:token}
		})
		setProfileData(user);
		setFollowerLength(user.followers.length);
		setFollowingLength(user.following.length);
		
	}

	const getProfilePosts=async(user_name)=>{
		const {data:{posts}}=await axios.get(`/api/posts/user/${user_name}`)
		setProfilePosts(posts);
		setProfileLength(posts.length);
	}

	const value={profileData,setProfileData,getProfileData,showAvatars,setShowAvatars,showEditProfile,setShowEditProfile,avatar,setAvatar,showList,setShowList,editProfileInput,setBio,setWebsite,setEditProfileInput,bio,website,followerLength,followingLength,getProfilePosts,profileLength,setProfileLength,profilePosts}

	
	

	return (
		<ProfileContext.Provider  value={value}>
			{children}
		</ProfileContext.Provider>	
	)
}