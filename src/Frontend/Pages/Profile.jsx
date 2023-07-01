import {Sidebar} from '../Components/Sidebar'
import {Aside} from '../Components/Aside'
import { Navbar } from '../Components/Navbar';
import {Post} from '../Components/Post'
import {User} from '../Components/User'
import { useContext,useState ,useEffect } from 'react';

import { PostContext, ProfileContext,AuthContext } from '../../index';


import axios from 'axios';

export function Profile(){
	const {user}=useContext(AuthContext)
	const {showEditProfile,setShowEditProfile,showList,setShowList,setAvatar,avatar,editProfileInput,setEditProfileInput,bio,setBio,setWebsite,updateProfile}=useContext(ProfileContext)

	const {userPosts,getUserData}=useContext(PostContext)

	
	useEffect(()=>{
		getUserData();
	},[])

	
	return (
		<div className='container'>
		<Navbar/>
		<Sidebar/>
		<main>
			<User user={user}/>

			{
				showEditProfile && <div>
				
				<form onSubmit={(e)=>{
					e.preventDefault();
					setBio(e.target.inputBio.value);
					setWebsite(e.target.inputWebsite.value);
					setShowEditProfile(false);
				}} style={{border:'1px solid ' ,padding:'1rem',margin:'1rem',display:'flex',flexDirection:'column' }} action="">
					<label>Add avatar</label>
					<input type="file" />
					<label htmlFor="bio">Add your bio</label>
					<textarea id='bio' name='inputBio' type="text" cols='30'/>
					<label htmlFor="website">Website Link</label>
					<input type="text" name='inputWebsite' id="website" />
					<button type='submit'>Submit</button>
				</form>

				</div>
				
				
			}

			

			<header>Your Posts</header>
			{

				userPosts.length===0 && <p className='no_content'>

					No available posts.

				</p>

			}
			
			{
				userPosts.map(post=>(
					<Post post={post}/>
					)	
				)
			}

			
		</main>
		<Aside />
	</div>
	
	)
}

/* { 
					!showList && <button onClick={()=>setShowList(true)}>View avatars</button>
				}	

				{ 
					showList && <button onClick={()=>setShowList(false)}>hide avatars</button>
				}	

					{
					showList && <ul>
					<li>
						<button onClick={()=>{
							setAvatar('/avatars/2.png');
							setShowList(false);
						}}><img src="/avatars/2.png" alt="" /></button>
						<button onClick={()=>{
							setAvatar('/avatars/3.png')
							setShowList(false)
						}}><img src="/avatars/3.png" alt="" /></button>
					</li>
				</ul>
			// } */