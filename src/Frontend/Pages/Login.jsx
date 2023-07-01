import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";


export function Login(){
	const {handleLogin,handleGuestLogin,setUserInput} =useContext(AuthContext);	
	
	return(
		<div className="login">

			<header>My Website</header>

			<form  onSubmit={handleLogin} >
		
				<label htmlFor="username" placeholder="username">Username</label>
				<input type="text" onChange={(e)=>setUserInput(form=>({...form,username:e.target.value}))} id="username" required />
				<label htmlFor="password">Password</label>
				<input type="password" onChange={(e)=>setUserInput(form=>({...form,password:e.target.value}))} id="password" required />		
				<button type="submit">Login</button>
				<div className="alternate-btn">
					<a href="/signup">Signup <br /></a>
				</div>
			</form>

			<button className="guest_login" onClick={handleGuestLogin} >Guest login</button>
		</div>

	)
}