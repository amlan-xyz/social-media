import { useContext, useEffect } from "react";
import { AuthContext, FollowerContext,PostContext, ProfileContext } from "../..";

import { useNavigate } from "react-router-dom";
export function Suggestions({suggested_user}){
	const {_id,username,firstName,lastName,followers}=suggested_user;
	const {user}=useContext(AuthContext)
	const {followUser,getSuggestions,unfollowUser}=useContext(FollowerContext)
	const {getProfileData}=useContext(ProfileContext)
	let navigate = useNavigate(); 


	return (
		<div className="suggestions">
			<ul>
				<li  key={_id}>
					<img src="/avatars/2.png" alt="profile" />
					<p onClick={()=>{
					navigate(`/profile/${_id}`)
					getProfileData(_id);
				}}>
						{firstName} {""}{lastName} <br />
						<small>{username}</small>
					</p>
					{
						followers.find(item=>item.username===user.username)?(<button onClick={(e)=>{e.preventDefault();
							unfollowUser(_id);
							getSuggestions();
							}}>Unfollow</button>):
						
						(<button onClick={(e)=>{
							e.preventDefault();
							followUser(_id);
							getSuggestions();
						}}>Follow</button>)
					}
					
				</li>
			</ul>
		</div>	
	)
}

