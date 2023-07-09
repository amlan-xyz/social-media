import {Sidebar} from '../Components/Sidebar'
import {Aside} from '../Components/Aside'
import { Navbar } from '../Components/Navbar';
// import {Bookmarks} from '../Components/Bookmarks'
import { useContext, useEffect, useState } from 'react';
import { BookmarkContext, PostContext } from '../../index';
import { Post } from '../Components/Post';
import {BookmarkPost} from '../Components/BookmarkPost'

export function Bookmark(){
	const {getPosts,posts}=useContext(PostContext)
	const {bookMarks,getBookmarks}=useContext(BookmarkContext)

	useEffect(()=>{
		getBookmarks();
		// getPosts();
	},[])

	return (
		<div className='container'>
		<Navbar/>
		<Sidebar/>
		<main>
			<header>Your Bookmarks</header>
			{/* <Post/> */}
				{
					bookMarks.length!==0?	bookMarks.map(bookmark=>(
						<BookmarkPost post={bookmark} />	
						)
					):
					<p className='no_content'>No posts bookmarked</p>
				}
		</main>
		<Aside />
	</div>
	
	)
}