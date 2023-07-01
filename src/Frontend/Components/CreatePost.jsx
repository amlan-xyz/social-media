import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { PostContext } from "../Context/PostsContext";


export function CreatePost(){

	const {getUserData}=useContext(PostContext)
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
			e.target.text_area.value=''
		}catch(err){
			console.log(err);
		}
	}

	
	return (
		<form onSubmit={createPost} className="create-post">
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