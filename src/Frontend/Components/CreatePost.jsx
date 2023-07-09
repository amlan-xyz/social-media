import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { PostContext } from "../Context/PostsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMultiply} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { toast } from "react-toastify";

export function CreatePost(){

	const {getUserData,setCreatePost,getHomePosts}=useContext(PostContext)
	const [postText,setPostText]=useState('')
	const createPost=async(e)=>{
		e.preventDefault();
		try{
			const encodedToken=localStorage.getItem('encodedToken');
			const response=await axios.post('/api/posts',	{postData:postText},{
				headers:{authorization:encodedToken}
			})
			getUserData();
			getHomePosts();
			e.target.text_area.value='';
			toast.success("Post Created")
			setCreatePost(false)
		}catch(err){
			console.log(err);
		}
	}

	
	return (
		<div className="modal">
			<div className="modal_wrapper"></div>
			<div className="modal_container">
			<form onSubmit={createPost} className="create-post">
				<div className="close_btn">
					<p>New Post</p>
					<a  onClick={()=>setCreatePost(false)}><FontAwesomeIcon icon={faMultiply}  className="post-icon"/></a>
				</div>

				<textarea onChange={(e)=>{
					setPostText({content:e.target.value}); 
					}}   id="text_area" cols="70" rows="3" placeholder="What's on your mind?"></textarea>
				<div>
				<button type="submit">Post</button>
			</div>	
			</form>	
		</div>
	  </div>
	) 
}