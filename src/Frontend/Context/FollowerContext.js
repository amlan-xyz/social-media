import axios from "axios";
import { createContext,useContext,useEffect,useState } from "react";

// contexts

import {AuthContext } from "../../index";

export const FollowerContext=createContext();

export function FollowerContextProvider({children}){
	const {token,user}=useContext(AuthContext);


	const [allSuggestions,setAllSuggestions]=useState([]);

	const getSuggestions=async()=>{
		const {data:{users}}=await axios.get('/api/users',{
			headers:{authorization:token}
		})	
		const removedLoggedInUser=users.filter(item=>(item.username!==user.username ));
		setAllSuggestions(removedLoggedInUser);
		// console.log(removedLoggedInUser);
	}

	const followUser=async(user_id)=>{
		try{
			const {data:{followUser}}=await axios.post(`/api/users/follow/${user_id}`,{},{
				headers:{authorization:token}
			});
			console.log(followUser);
			setAllSuggestions(allSuggestions.filter(item=>item._id!==user_id));
		}catch(e){
			console.log(e);
		}
	}

	useEffect(()=>{
		getSuggestions();
	},[])

	const value={allSuggestions,getSuggestions,followUser};
	return(
		<FollowerContext.Provider value={value}>
			{children}
		</FollowerContext.Provider>	
	)
}