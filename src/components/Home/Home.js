import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import "./Home.css";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2 className="home">This is Home</h2>
      <p>Current user is : {user ? user.displayName : "Nobody"}</p>
    </div>
  );
};

export default Home;
