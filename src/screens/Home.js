import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>Kofi wayo</div>;
}

export default Home;
