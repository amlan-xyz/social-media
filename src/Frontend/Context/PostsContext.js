import axios from "axios";
import { createContext,useContext,useState,useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const PostContext=createContext();

export function PostContextProvider({children}){

	const {user,token}=useContext(AuthContext)
	const [showEdit,setShowEdit]=useState(false);
	const [editInput,setEditInput]=useState([]);
	const [userPosts,setUserPosts]=useState([]);
	const [postId,setPostId]=useState('');
	const [posts,setPosts]=useState([]);

	const getPosts=async()=>{
		const {data:{posts}}=await axios.get('/api/posts');
		setPosts(posts);
	}


	const getUserData=async()=>{
		const {data:{posts}}=await axios.get(`/api/posts/user/${user?.username}`);
		setUserPosts(posts)
	}

	const likePost=async(post_id)=>{
		try{
		const response=await axios.post(`/api/posts/like/${post_id}`,{},{
			headers:{authorization:token}
		})
		
		console.log(response);
		}catch(error){
			console.log(error);
		}

	}

		const dislikePost=async(post_id)=>{
		try{
		const response=await axios.post(`/api/posts/dislike/${post_id}`,{},{
			headers:{authorization:token}
		})
		console.log(response);
		}catch(error){
			console.log(error);
		}

	}

	const editPost=async()=>{
		try{
			const response=await axios.post(`/api/posts/edit/${postId}`,{postData:{content:editInput}},{
			headers:{authorization:token}
			})
		setShowEdit(false)
		}catch(err){
			console.log(err)
		}
		
	}


	const deletePost=async(post_id)=>{
		try{
			const response=await axios.delete(`/api/posts/${post_id}`,{
				headers:{authorization:token}
			})
			getUserData()
			console.log(response);
		}catch(err){
			console.log(err)
		}
	}


	const value={posts,getPosts,likePost,setPostId,postId,dislikePost,showEdit,setShowEdit,editInput,setEditInput,editPost,userPosts,getUserData,deletePost};
	return (
		<PostContext.Provider value={value}>
			{children}
		</PostContext.Provider>
	)
}