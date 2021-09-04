import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "../src/features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Footer from "./Footer";

function App() {

  // pull user object out from REDUX, see src/features/userSlice/Selectors
  const user = useSelector(selectUser);
  // REDUX
  const dispatch = useDispatch();

  // persist user log in to Firebase from app redux state
  // onAuthChange is a listener that listens for any change in Auth state, login, logout, did the user change?
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in - assign Firebase userAuth props to our REDUX user
        dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
        }));

      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, []);


  

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
            <Widgets />

            {/* Footer for Mobile only*/}
            <Footer />
            
            
            </div>
      )}
    </div>
  );
}

export default App;
