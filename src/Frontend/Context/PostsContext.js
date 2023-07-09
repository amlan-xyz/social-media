import axios from "axios";
import { createContext,useContext,useState,useEffect } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../index";
export const PostContext=createContext();

export function PostContextProvider({children}){

	const {user,token}=useContext(AuthContext)
	const [showEdit,setShowEdit]=useState(false);
	const [editInput,setEditInput]=useState([]);
	const [userPosts,setUserPosts]=useState([]);
	const [postId,setPostId]=useState('');
	const [posts,setPosts]=useState([]);
	const [showCreatePost,setCreatePost]=useState(false);
	const [followingPosts,setFollowingPosts]=useState([]);
	const [homePosts,setHomePosts]=useState([]);

	const getPosts=async()=>{
		const {data:{posts}}=await axios.get('/api/posts');
		setPosts(posts);
	}


	const getUserData=async()=>{
		const {data:{posts}}=await axios.get(`/api/posts/user/${user?.username}`);
		setUserPosts(posts);
	}

	const getHomePosts=async()=>{

		const {data:{posts}}=await axios.get(`/api/posts/user/${user?.username}`,{
			headers:{authorization:token}
		});
		setHomePosts(posts);

		const {data:{user:{following}}}=await axios.get(`/api/users/${user._id}`,{	headers:{authorization:token}})

		following.map(async({username})=>{
			const {data}=await axios.get(`/api/posts/user/${username}`)
			setHomePosts(homePosts=>[...homePosts,...data.posts])
		});
	}


	const likePost=async(post_id)=>{
		try{
		const response=await axios.post(`/api/posts/like/${post_id}`,{},{
			headers:{authorization:token}
		})
		}catch(error){
			console.log(error);
		}

	}

		const dislikePost=async(post_id)=>{
		try{
		const response=await axios.post(`/api/posts/dislike/${post_id}`,{},{
			headers:{authorization:token}
		})
		}catch(error){
			console.log(error);
		}

	}

	const editPost=async()=>{
		try{
			const response=await axios.post(`/api/posts/edit/${postId}`,{postData:{content:editInput}},{
			headers:{authorization:token}
			})
			getHomePosts();
		setShowEdit(false)
		toast.success("Post edited" );
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
			toast.success("Post Deleted" );
		}catch(err){
			console.log(err)
		}
	}

	const sortTrending=()=>{
		setUserPosts(homePosts.sort((a,b)=>b.likes.likeCount-a.likes.likeCount));
	}

	const sortLatest=()=>{
		setUserPosts(homePosts.sort((a,b)=>new Date(b.createdAt)- new Date(a.createdAt)));
	}


	useEffect(()=>{
			getUserData();
	},[])

	const value={sortTrending,setCreatePost,showCreatePost,posts,getPosts,likePost,setPostId,postId,dislikePost,showEdit,setShowEdit,editInput,setEditInput,editPost,userPosts,getUserData,deletePost,followingPosts,setFollowingPosts,getHomePosts,homePosts,setHomePosts,sortLatest};
	return (
		<PostContext.Provider value={value}>
			{children}
		</PostContext.Provider>
	)
}