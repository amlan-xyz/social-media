import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { PostContext } from "../Context/PostsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMultiply} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export function CreatePost(){

	const {getUserData,setCreatePost,showCreatePost}=useContext(PostContext)
	const [postText,setPostText]=useState('')
	const createPost=async(e)=>{
		e.preventDefault();
		try{
			const encodedToken=localStorage.getItem('encodedToken');
			// console.log(data)
			const response=await axios.post('/api/posts',	{postData:postText},{
				headers:{authorization:encodedToken}
			})
			alert('post created');
			getUserData();
			e.target.text_area.value='';
			setCreatePost(false)
		}catch(err){
			console.log(err);
		}
	}

	
	return (
		<form onSubmit={createPost} className="create-post">
			<div className="close_btn">
				<p>New Post</p>
				<a  onClick={()=>setCreatePost(false)}><FontAwesomeIcon icon={faMultiply}  className="post-icon"/></a>
			</div>
			{/* <textarea onChange={(e)=>setPost(form=>({...form,content:e.target.value}))}   id="" cols="30" rows="8" placeholder="What's on your mind?"></textarea> */}
			<textarea onChange={(e)=>{
				setPostText({content:e.target.value}); 
			}}   id="text_area" cols="30" rows="8" placeholder="What's on your mind?"></textarea>
			<div>
				{/* <input type="file" /> */}
				<button type="submit">Post</button>
			</div>
			
		</form>	
	) 
}