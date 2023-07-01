import axios from "axios";
import { useContext, useState } from "react"
import { PostContext } from "../Context/PostsContext";


export function EditPost(){

	const {getUserData,setShowEdit,editInput,setEditInput,editPost,postId}=useContext(PostContext)

	const [data,setPost]=useState([]);


	return (
		<form onSubmit={(e)=>{
			e.preventDefault();
			editPost();
			getUserData();
		}} 
		className="create-post">
				<button onClick={()=>setShowEdit(false)}>Close</button>
			<textarea value={editInput} onChange={(e)=>setEditInput(e.target.value)} id="" cols="30" rows="10" placeholder="Edit post"></textarea>
			<div>
				{/* <input type="file" /> */}
				<button type="submit">Post</button>
			</div>
			
		</form>	
	) 
}

// onChange={(e)=>setPost(form=>({...form,content:e.target.value}))} 