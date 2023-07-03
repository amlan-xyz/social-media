import axios from "axios"
import { useState,useEffect, useContext } from "react"
import { PostContext ,AuthContext,BookmarkContext} from "../../index";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart,faBookmark,faTrashCan,faPencil} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export function Post({post}){
	const {getPosts,getUserData,postId,setPostId,likePost,dislikePost,showEdit,setShowEdit,editInput,setEditInput,editPost,viewEdit,deletePost}=useContext(PostContext);
	const {user} =useContext(AuthContext)
	const {_id,content,likes:{likeCount,likedBy,dislikedBy},username,createdAt,updatedAt}=post;


	// bookmarks context

	const {getBookmarks,addToBookmarks,removeFromBookmarks,bookMarks}=useContext(BookmarkContext);
	
	useEffect(()=>{
		getPosts();
		getBookmarks();
	})


	return(
		<div className="post" >
			<div className="user">
				<div className="details">

				{/* {

				} */}

				<img src="/avatars/3.png" alt="profile" />
				<header>
					{username}
					{"  "},{"  "} 
					{createdAt.slice(0,10)}
				</header>
				</div>
				
				<div className="post-btn">
				{
				user.username===username &&  <a onClick={(e)=>{
					e.preventDefault();
					deletePost(_id);
				}}><FontAwesomeIcon className="post-icon" icon={faTrashCan}/></a>
				}	
				{user.username===username && !showEdit && <a onClick={()=>{
						setShowEdit(true);
						setEditInput(content);
						setPostId(_id);
					}}><FontAwesomeIcon className="post-icon" icon={faPencil}/></a>
			} 
				</div>
			</div>
			
			<p>
				{content}
			</p>
			<div>
				<div className="likes">

				{
					likedBy.length>0 && likedBy.find(item=>item.username===user.username)?<a 
					onClick={(e)=>{
						e.preventDefault();
						dislikePost(_id);
						getUserData();
					}} href=""><FontAwesomeIcon className="post-icon-liked" icon={faHeart}/></a>:<a href=""
					onClick={(e)=>{
						e.preventDefault();
						likePost(_id);
						getUserData();
					}}
					 ><FontAwesomeIcon className="post-icon" icon={faHeart}/></a>
				}

				

					
				

				 <p>
					{likeCount}
				 </p>
				
				</div>
				
					{
						bookMarks.length>0 && bookMarks.find(bookmark=>bookmark._id===_id)?<a href='' onClick={(e)=>{
							e.preventDefault();
							removeFromBookmarks(_id);
							getUserData();
						}}
					><FontAwesomeIcon className="post-icon-liked" icon={faBookmark}/></a>:	<a href="" onClick={(e)=>{
						e.preventDefault();
						addToBookmarks(_id);
						getUserData();
					}}><FontAwesomeIcon className="post-icon" icon={faBookmark}/></a>
						
					}

				
					

			
					
			</div>
{
			 
			
			}

		</div>	

		
		)
}
