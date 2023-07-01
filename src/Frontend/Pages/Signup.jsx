import { useState } from "react"
import axios from "axios";


export function Signup(){
	const [user,setUser]=useState({firstName:'',lastName:'',username:'',password:''});
	const handleSignup=async(e)=>{
		e.preventDefault();
		const response=await axios.post('/api/auth/signup',{user})
		console.log(response)
	}
	return(
		<div className="login">

			<header>My Website</header>

			{/* onChange = {(e)=> setUser(form => ({...form,name:e.target.value}) } */}

			<form action="" onSubmit={handleSignup} >
				<label htmlFor="firstName" placeholder="Name">First Name</label>
				<input type="text" onChange={(e)=>setUser(form=>({...form,firstName:e.target.value}))} id="firstName" required />
				<label htmlFor="lastName" placeholder="Name">LastName</label>
				<input type="text" onChange={(e)=>setUser(form=>({...form,lastName:e.target.value}))} id="lastName" required />
				<label htmlFor="username" placeholder="username">Username</label>
				<input type="text" onChange={(e)=>setUser(form=>({...form,username:e.target.value}))} id="username" required />
				<label htmlFor="password">Password</label>
				<input type="password" onChange={(e)=>setUser(form=>({...form,password:e.target.value}))} id="password" required />		
				<div className="checkbox">
				<input type="checkbox" id="terms" required/>
				<label htmlFor="terms">I accept all Terms & Conditions</label>
				</div>

				<button type="submit">Signup</button>

			</form>

		</div>
	)
}