import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Knock Knock ! Who is there ?</h2>
      <h5>{user ? user.displayName : "Bhoot"}</h5>
    </div>
  );
};

export default Products;
