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

export function Home(){
	const {userPosts,getUserData,showEdit}=useContext(PostContext)

	
	useEffect(()=>{
		getUserData();
	},[])

	return(
	<div className='container'>
		
		<Navbar/>
		<Sidebar/>
		<main>
			<CreatePost/>
			<header>Latest Posts</header>
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