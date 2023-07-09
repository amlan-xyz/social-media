
import './App.css';
import {Routes,Route} from 'react-router'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components

//pages

import {Home} from './Frontend/Pages/Home'
import { Explore } from './Frontend/Pages/Explore';
import { Bookmark } from './Frontend/Pages/Bookmark';
import { Profile } from './Frontend/Pages/Profile';
import { Login } from './Frontend/Pages/Login';
import { Signup } from './Frontend/Pages/Signup';

import {RequiresAuth} from './Frontend/Utils/RequiresAuth'


import '@fortawesome/fontawesome-svg-core/styles.css';



export default function App() {
  


  return (
   
    <div className="App">
     <ToastContainer
        position="bottom-right"
        autoClose="400"
        closeOnClick="true"
        draggable="true"
        borderRadius="10px"
      />
     
      <Routes>

        <Route path='/explore' element={<Explore/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      


        <Route path='/' element={ 
        <RequiresAuth>
          < Home/>
        </RequiresAuth>
        }/>
        <Route 
          path='/profile/:id'

          element={
            <RequiresAuth>
              <Profile/>
            </RequiresAuth>
          }
        />

      <Route path='/bookmarks' element={
        <RequiresAuth>
          <Bookmark/>
        </RequiresAuth>
        
      } /> 
        
      </Routes>
      
    </div>
  );
}

