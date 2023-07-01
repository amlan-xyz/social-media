import { useState,createContext } from "react";

export const ProfileContext=createContext();

export function ProfileContextProvider({children}){
	const [showEditProfile,setShowEditProfile]=useState(false);
	const [avatar,setAvatar]=useState('/avatars/1.png')
	const [showList,setShowList]=useState(false);
	const [editProfileInput,setEditProfileInput]=useState([]);
	const [bio,setBio]=useState([]);
	const [website,setWebsite]=useState([]);

	const updateProfile=async()=>{
	
	}

	const value={showEditProfile,setShowEditProfile,avatar,setAvatar,showList,setShowList,editProfileInput,setBio,setWebsite,setEditProfileInput,bio,website,updateProfile}


	

	return (
		<ProfileContext.Provider  value={value}>
			{children}
		</ProfileContext.Provider>	
	)
}