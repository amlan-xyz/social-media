import axios from 'axios';
import {useState,createContext, useContext} from 'react';
import { toast } from "react-toastify";
import { AuthContext } from '../../index';

export const BookmarkContext=createContext();

export function BookmarkContextProvider({children}){

	const {token}=useContext(AuthContext);
	const [bookMarks,setBookmarks]=useState([]);

	const getBookmarks=async()=>{
		try{
			const {data:{bookmarks}}=await axios.get('/api/users/bookmark',{
				headers:{authorization:token}
			})
			setBookmarks(bookmarks);
		}catch(e){
			console.log(e);
		}
	}

	const addToBookmarks=async(post_id)=>{
		try{
			const {data:{bookmarks}}=await axios.post(`/api/users/bookmark/${post_id}`,{},{
				headers:{authorization:token}
			})
			toast.success("Added to Bookmarks");
		}catch(e){
			console.log(e);
		}
	}

	const removeFromBookmarks=async(post_id)=>{
		try{
			const {data:{bookmarks}}=await axios.post(`/api/users/remove-bookmark/${post_id}`,{},{
				headers:{authorization:token}
			})
			toast.success("Removed from Bookmarks");
		}catch(e){
			console.log(e);
		}
	}



	const value={getBookmarks,bookMarks,addToBookmarks,removeFromBookmarks};
	return (
		<BookmarkContext.Provider value={value}>
			{children}
		</BookmarkContext.Provider>	
	)
}