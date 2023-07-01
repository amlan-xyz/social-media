import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {BrowserRouter as Router} from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

import { AuthContext,AuthContextProvider } from './Frontend/Context/AuthContext';
import { PostContext,PostContextProvider } from './Frontend/Context/PostsContext';
import { ProfileContext,ProfileContextProvider } from './Frontend/Context/ProfileContext';
import { BookmarkContext,BookmarkContextProvider } from './Frontend/Context/BookmarkContext';
import { FollowerContext,FollowerContextProvider } from './Frontend/Context/FollowerContext';

import { makeServer } from "./server";

// Call make Server
makeServer();

export {AuthContext,PostContext,ProfileContext,BookmarkContext,FollowerContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <PostContextProvider>
          <ProfileContextProvider>
          <BookmarkContextProvider>
            <FollowerContextProvider>
            <App />
            </FollowerContextProvider>
            </BookmarkContextProvider>
          </ProfileContextProvider>
        </PostContextProvider>
      </AuthContextProvider>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
