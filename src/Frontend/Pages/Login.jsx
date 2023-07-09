import { useContext,useState} from "react";
import { AuthContext } from "../Context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

export function Login(){
	const {handleLogin,handleGuestLogin,setUserInputLogin} =useContext(AuthContext);	
	const [passwordType,setPasswordType]=useState("password")
	return(
		<div className="login">

			<header>WeShare</header>

			<form  onSubmit={handleLogin} >
		
				<label htmlFor="username" placeholder="username">Username</label>
				<input type="text" onChange={(e)=>setUserInputLogin(form=>({...form,username:e.target.value}))} id="username" required />
				<div className="checkbox">
				<label htmlFor="password">Password</label>
				{
						passwordType==='password'?<span onClick={()=>{
							setPasswordType('text')
						}}><FontAwesomeIcon className="post-icon" icon={faEye}/></span>:<span onClick={()=>{
							setPasswordType('password')
						}}><FontAwesomeIcon className="post-icon" icon={faEyeSlash}/></span>
					}
				</div>
				<input type="password" onChange={(e)=>setUserInputLogin(form=>({...form,password:e.target.value}))} id="password" required />		
				
				<button type="submit">Login</button>
				<div className="alternate-btn">
					<a className="" onClick={handleGuestLogin} >Guest login</a>
					<a href="/signup">Signup</a>
				</div>
			</form>

			
		</div>

	)
}