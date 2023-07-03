import {Sidebar} from '../Components/Sidebar'
import {Aside} from '../Components/Aside'
import { Navbar } from '../Components/Navbar';
import { CreatePost } from '../Components/CreatePost';
import {Post} from '../Components/Post'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios'
import { PostContext } from '../Context/PostsContext';

import { EditPost } from '../Components/EditPost';
import { Filter } from '../Components/Filter';

export function Home(){
	const {userPosts,getUserData,showEdit,showCreatePost,setCreatePost}=useContext(PostContext)

	
	useEffect(()=>{
		getUserData();
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
			<header>Latest Posts</header>
			<Filter/>
			</div>

			
			{
				userPosts.map(post=>(
					<Post post={post}/>
					)	
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