import { useContext, useState } from "react"
import { AuthContext } from "../../index";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

export function Signup(){
	
	const {setUserInputSignup,handleSignup}=useContext(AuthContext)
	const [passwordType,setPasswordType]=useState("password")
	return(
		<div className="login">

			<header>WeShare</header>

			<form action="" onSubmit={handleSignup} >
				<label htmlFor="firstName" placeholder="Name">First Name</label>
				<input type="text" onChange={(e)=>setUserInputSignup(form=>({...form,firstName:e.target.value}))} id="firstName" required />
				<label htmlFor="lastName" placeholder="Name">LastName</label>
				<input type="text" onChange={(e)=>setUserInputSignup(form=>({...form,lastName:e.target.value}))} id="lastName" required />
				<label htmlFor="username" placeholder="username">Username</label>
				<input type="text" onChange={(e)=>setUserInputSignup(form=>({...form,username:e.target.value}))} id="username" required />
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
				
					<input type={passwordType} onChange={(e)=>setUserInputSignup(form=>({...form,password:e.target.value}))} id="password" required ></input>		
					
				<div className="checkbox">
				<div className="">
				<input type="checkbox" id="terms" required/>
				<label htmlFor="terms">I accept all Terms & Conditions</label>
				</div>
				
				</div>

				<button type="submit">Signup</button>

			</form>

		</div>
	)
}