import {Sidebar} from '../Components/Sidebar'
import {Aside} from '../Components/Aside'
import { Navbar } from '../Components/Navbar';
import {Post} from '../Components/Post'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PostContext } from '../Context/PostsContext';
import { EditPost } from '../Components/EditPost';

export function Explore(){

	const {posts,getPosts,showEdit} =useContext(PostContext)

	useEffect(()=>{
		getPosts();
		// getBookmarks();
	},[])


	return (
		<div className='container'>
		<Navbar/>
		<Sidebar/>
		<main>
			<header>Explore</header>

			{
				posts.map(post=>(
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