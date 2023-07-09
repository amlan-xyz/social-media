import {Sidebar} from '../Components/Sidebar'
import {Aside} from '../Components/Aside'
import { Navbar } from '../Components/Navbar';
import { CreatePost } from '../Components/CreatePost';
import {Post} from '../Components/Post'
import { useContext, useEffect, useState} from 'react';
import Modal from 'react-modal';


import { PostContext } from '../Context/PostsContext';

import { EditPost } from '../Components/EditPost';
import { Filter } from '../Components/Filter';




export function Home(){
	const {getHomePosts,homePosts,showEdit,showCreatePost,setCreatePost}=useContext(PostContext)

	
  
	useEffect(()=>{
		getHomePosts();
	  },[])

	return(
	<div className='container'>
		
		<Navbar/>
		<Sidebar/>
		<main>
	  		
			 
			{
				!showCreatePost && <button className="sidebar-btn" onClick={()=>{
					setCreatePost(true);
				}}>Create new Post</button>
			}

			{
				showCreatePost && <CreatePost/>
			}
			
			
			<div className="home_filters">
				<header>All Posts</header>
				<Filter/>
			</div>

			
			{
			    homePosts.length!==0?homePosts.map(post=>(
					<Post key={post._id} post={post}/>
					)	
				):(
					<p className='no_content'>No posts available</p>
					)
			}
			{
				showEdit && <EditPost />
			}

			
	
		</main>
		
		<Aside />
	</div>
	
	)
}