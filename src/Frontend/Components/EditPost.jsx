import { useContext, useState } from "react"
import { PostContext } from "../Context/PostsContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMultiply} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
export function EditPost(){

	const {getUserData,setShowEdit,editInput,setEditInput,editPost}=useContext(PostContext)

	const [data,setPost]=useState([]);


	return (
		<div className="modal">
		<div className="modal_wrapper"></div>
		<div className="modal_container">
		<form onSubmit={(e)=>{
			e.preventDefault();
			editPost();
			getUserData();
		}} 
		className="create-post">
				<div className="close_btn">
					<p>Edit Post</p>
					<a  onClick={()=>setShowEdit(false)}><FontAwesomeIcon icon={faMultiply}  className="post-icon"/></a>
				</div>
			<textarea value={editInput} onChange={(e)=>setEditInput(e.target.value)} id="" cols="70" rows="10" placeholder="Edit post"></textarea>
			<div>
				{/* <input type="file" /> */}
				<button type="submit">Update</button>
			</div>
			
		</form>	
		</div>
	  </div>
	) 
}

