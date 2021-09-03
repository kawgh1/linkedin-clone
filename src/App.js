import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "../src/features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {

  // pull user object out from REDUX, see src/features/userSlice/Selectors
  const user = useSelector(selectUser);
  

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* If user not logged in, only display Login Page */}
      {!user ? (
          <Login />
      ) : (

        
        <div className="app__body">
            {/* Sidebar */} 
            <Sidebar />

            {/* Feed */}
            <Feed />
            {/* Widgets */}
            </div>
      )}
    </div>
  );
}

export default App;
