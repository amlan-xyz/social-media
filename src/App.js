
import './App.css';
import {Routes,Route, useLocation, useNavigate} from 'react-router'

//components

//pages

import {Home} from './Frontend/Pages/Home'
import { Explore } from './Frontend/Pages/Explore';
import { Bookmark } from './Frontend/Pages/Bookmark';
import { Profile } from './Frontend/Pages/Profile';
import { Login } from './Frontend/Pages/Login';
import { Signup } from './Frontend/Pages/Signup';
import { Test } from './Frontend/Pages/Test';
import {RequiresAuth} from './Frontend/Utils/RequiresAuth'
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';


export default function App() {
  

  return (
   
    <div className="App">
     
     
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
          path='/profile'

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

