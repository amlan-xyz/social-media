import {Sidebar} from '../Components/Sidebar'
import {Aside} from '../Components/Aside'
import { Navbar } from '../Components/Navbar';
import {Post} from '../Components/Post'
import {User} from '../Components/User'
import { useContext,useState ,useEffect } from 'react';

import { PostContext, ProfileContext,AuthContext } from '../../index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMultiply} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


import axios from 'axios';
import { useParams } from 'react-router-dom';

export function Profile(){

	const {user}=useContext(AuthContext);

	const {profileData,setProfileData,getProfileData,showEditProfile,setShowEditProfile,showList,setShowList,setAvatar,avatar,editProfileInput,setEditProfileInput,bio,website,setBio,setWebsite,updateProfile,showAvatars,setShowAvatars,followingLength,followerLength,getProfilePosts,profilePosts,profileLength}=useContext(ProfileContext)

	const {id}=useParams();

	useEffect(()=>{
		getProfileData(id);
		getProfilePosts(profileData.username);
	})
	
	return (
		<div className='container'>
		<Navbar/>
		<Sidebar/>
		<main>
			{/* <User/> */}
			<div className="user">
			<img src={avatar} alt="profile" />
			
			<h3>{profileData.firstName + ' ' + profileData.lastName}</h3>
			<small>@{profileData.username}</small>
		

			<p>{bio}</p>
			<a href="">{website}</a>

			
			
			<div className="profile-btns">
			{
				!showEditProfile && profileData.username===user.username && <button onClick={()=>{
					setShowEditProfile(true);
				}}>Edit Profile</button>
			}

			{
				!showAvatars && profileData.username===user.username && <button onClick={()=>{
					setShowAvatars(true);
				}}>Add avatars</button>
			}

			</div>

			<ul>
				<li><span>{followingLength}</span> <span>Following</span></li>
				<li><span>{profileLength}</span>  <span>Posts</span></li>
				<li><span>{followerLength}</span> <span>Followers</span> </li>
			</ul>
			
		</div>		
			{
				showEditProfile && <div className="modal">
				<div className="modal_wrapper"></div>
				<div className="modal_container">
				<div  className='edit-div'>
						<div className="edit-heading">
							<p>Edit Profile</p>
							<a  onClick={()=>setShowEditProfile(false)}><FontAwesomeIcon icon={faMultiply}  className="post-icon"/></a>
						</div>
						<hr />
						<form className='edit-form' onSubmit={(e)=>{
							e.preventDefault();
							setBio(e.target.inputBio.value);
							setWebsite(e.target.inputWebsite.value);
							setShowEditProfile(false);
						}} action="">
							<label htmlFor="bio">Add your bio</label>
							<textarea id='bio' name='inputBio' type="text" cols='30'/>
							<label htmlFor="website">Website Link</label>
							<input type="text" name='inputWebsite' id="website" />
							<button className='edit-btn' type='submit'>Submit</button>
						</form>
		
						</div>
				</div>
			  </div>
				
				
			}

			{

				

				showAvatars && <div className="modal">
				<div className="modal_wrapper"></div>
				<div className="modal_container">
				<div className="avatar">
						<div className="">
						<header>Choose avatar</header>
						<a  onClick={()=>setShowAvatars(false)}><FontAwesomeIcon icon={faMultiply}  className=""/></a>
						</div>
						
							<hr />
						<ul>
							<li onClick={()=>{
								setAvatar('/avatars/2.png')
								setShowAvatars(false);
							}}><img src="/avatars/2.png" alt="" /></li>
							<li  onClick={()=>{
								setAvatar('/avatars/1.png')
								setShowAvatars(false);
							}}><img src="/avatars/1.png" alt="" /></li>
							<li  onClick={()=>{
								setAvatar('/avatars/3.png')
								setShowAvatars(false);
							}}> <img src="/avatars/3.png" alt="" /></li>
						</ul>
					</div>
				</div>
			  </div>
			
			}

			

			

			<header>Your Posts</header>
			{

				profileLength===0 && <p className='no_content'>

					No available posts.

				</p>

			}
			
			{
				profilePosts.map(post=>(
					<Post key={post._id} post={post}/>
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