import { useContext } from "react";
import { FollowerContext } from "../..";

export function Suggestions({user}){
	const {_id,username,firstName,lastName}=user;
	const {followUser}=useContext(FollowerContext)
	// const {getUserData}=useContext(PostContext)
	return (
		<div className="suggestions">
			<ul>
				<li key={_id}>
					<img src="/avatars/2.png" alt="profile" />
					<p>
						{firstName} {""}{lastName} <br />
						<small>{username}</small>
					</p>
					<button onClick={(e)=>{
						e.preventDefault();
						followUser(_id);
					}}>Follow</button>
				</li>
			</ul>
		</div>	
	)
}