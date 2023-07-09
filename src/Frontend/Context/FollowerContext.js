import axios from "axios";
import { createContext,useContext,useEffect,useState } from "react";
import { toast } from "react-toastify";

// contexts

import {AuthContext, PostContext } from "../../index";

export const FollowerContext=createContext();

export function FollowerContextProvider({children}){
	const {token,user}=useContext(AuthContext);
	const {followingPosts,getHomePosts}=useContext(PostContext)

	const [allSuggestions,setAllSuggestions]=useState([]);


	const getSuggestions=async()=>{
		const {data:{users}}=await axios.get('/api/users',{
			headers:{authorization:token}
		})	
		const removedLoggedInUser=users.filter(item=>(item._id!==user._id));
		setAllSuggestions(removedLoggedInUser);
	}

	const followUser=async(user_id)=>{
		try{
			const {data:{followUser}}=await axios.post(`/api/users/follow/${user_id}`,{},{
				headers:{authorization:token}
			});
			getHomePosts();
			toast.success(`Following ${followUser.username}` );
		}catch(e){
			console.log(e);
		}
	}


	const unfollowUser=async(user_id)=>{
		try{
			const {data:{followUser}}=await axios.post(`/api/users/unfollow/${user_id}`,{},{
				headers:{authorization:token}
			});
			getHomePosts();
			toast.success(`Unfollowed ${followUser.username}` );
		}catch(e){
			console.log(e);
		}
	}


	useEffect(()=>{
		getSuggestions();
	},[user])

	const value={allSuggestions,getSuggestions,followUser,unfollowUser,followingPosts};
	return(
		<FollowerContext.Provider value={value}>
			{children}
		</FollowerContext.Provider>	
	)
}