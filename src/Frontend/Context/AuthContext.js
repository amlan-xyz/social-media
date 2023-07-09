import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext =createContext();



export function AuthContextProvider({children}){
	const [isLoggedIn,setIsLoggedIn]=useState(false);
	const [userInputLogin,setUserInputLogin]=useState({username:'',password:''});
	const [userInputSignup,setUserInputSignup]=useState({firstName:'',lastName:'',username:'',password:''});
	const [user,setUser]=useState([]);
	const [token,setToken]=useState([]);

	const location=useLocation();
	const navigate=useNavigate();

	const handleLogin=async(e)=>{
		e.preventDefault();
		try{
			const {data:{foundUser,encodedToken}}=await axios.post('/api/auth/login',{username:userInputLogin.username,password:userInputLogin.password})
			setIsLoggedIn(!isLoggedIn);
			localStorage.setItem('encodedToken',encodedToken);
			toast.success("Logged In Successfully");
			setUser(foundUser);
			navigate(location?.state?.from?.pathname || '/')
		}catch(e){
			toast.error("Invalid user");
			navigate('/login')
		}
		
	}


	const handleSignup=async(e)=>{
		e.preventDefault();
		const {data:{createdUser,encodedToken}}=await axios.post('/api/auth/signup',{userInputSignup})
		setIsLoggedIn(!isLoggedIn);
		localStorage.setItem('encodedToken',encodedToken);
		toast.success("Signed In Successfully");
		setUser(createdUser);
		navigate(location?.state?.from?.pathname || '/');
	}


	const handleGuestLogin=async()=>{
		try{
			const {data:{foundUser,encodedToken}}=await axios.post('/api/auth/login',{username:'amlan',password:'1234'})
		
		localStorage.setItem('encodedToken',encodedToken);
		setUser(foundUser);
		setIsLoggedIn(!isLoggedIn);
		toast.success("Logged In Successfully");
		navigate(location?.state?.from?.pathname);
		}catch(e){
			toast.error("Please try again");
			navigate('/login')
		}
		
	}


	const handleLogout=()=>{
		setIsLoggedIn(false);
		localStorage.removeItem('encodedToken');
		toast.success("Logged out successfully");
		navigate('/login');
	}

	useEffect(()=>{
		setToken(localStorage.getItem('encodedToken'));
		
	},[])

	const value={setUser,isLoggedIn,setIsLoggedIn,userInputLogin,setUserInputLogin,handleGuestLogin,user,token,handleLogout,handleLogin,handleSignup,userInputSignup,setUserInputSignup}
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
		)
}