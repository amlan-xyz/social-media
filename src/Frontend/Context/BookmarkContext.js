import axios from 'axios';
import {useState,createContext, useContext} from 'react';

import { AuthContext } from '../../index';

export const BookmarkContext=createContext();

export function BookmarkContextProvider({children}){

	const {token}=useContext(AuthContext);
	const [bookMarks,setBookmarks]=useState([]);
	// const [bookmarkPosts,setBookmarkPosts]=useState([]);

	const getBookmarks=async()=>{
		try{
			const {data:{bookmarks}}=await axios.get('/api/users/bookmark',{
				headers:{authorization:token}
			})
			setBookmarks(bookmarks);
			// console.log(bookMarks);
		}catch(e){
			console.log(e);
		}
	}

	const addToBookmarks=async(post_id)=>{
		try{
			const {data:{bookmarks}}=await axios.post(`/api/users/bookmark/${post_id}`,{},{
				headers:{authorization:token}
			})
			// const postId=bookmarks.map(item=>item._id);
			// console.log(postId);
		}catch(e){
			console.log(e);
		}
	}

	const removeFromBookmarks=async(post_id)=>{
		try{
			const response=await axios.post(`/api/users/remove-bookmark/${post_id}`,{},{
				headers:{authorization:token}
			})
			console.log(response);
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