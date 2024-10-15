import { useState } from "react";

const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h1>{loggedIn ? "loggedin" : "loggedout"}</h1>
    </div>
  );
};

export default LoggedIn;
