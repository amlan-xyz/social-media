import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


export const AuthContext =createContext();



export function AuthContextProvider({children}){
	const [isLoggedIn,setIsLoggedIn]=useState(false);
	const [userInput,setUserInput]=useState({username:'',password:''});
	const [user,setUser]=useState([]);
	const [token,setToken]=useState([]);



	// const handleLogin=async(e)=>{
	// 	e.preventDefault();
	// 	const response=await axios.post('/api/auth/login',{username:userInput.username,password:userInput.password})
	// 	console.log(response)
	// }

	const location=useLocation();
	const navigate=useNavigate();

	const handleGuestLogin=async()=>{
		try{
			const {data:{foundUser,encodedToken}}=await axios.post('/api/auth/login',{username:'amlan',password:'1234'})
		setIsLoggedIn(!isLoggedIn);
		localStorage.setItem('encodedToken',encodedToken);
		setUser(foundUser);
		navigate(location?.state?.from?.pathname);
		}catch(e){
			console.log(e);
		}
		
	}

	// const getLoggedInUserData=async()=>{
	// 	const {data}=await axios.get(`/api/users/${user?._id}`);
	// 	setUser(data.user);
	// 	console.log(user);
	// }


	useEffect(()=>{
		setToken(localStorage.getItem('encodedToken'));
		// if(localStorage.getItem('encodedToken')){
		// 	setIsLoggedIn(true);
		// }
	},[])

	const value={isLoggedIn,setIsLoggedIn,userInput,setUserInput,handleGuestLogin,user,token}
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
		)
}