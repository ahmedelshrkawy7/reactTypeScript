import { useState } from "react";
type authUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<authUser>({} as authUser);
  //   const handleLogin = () => {
  //     setUser(null);
  //   };
  const handleLogout = () => {
    setUser({
      name: "vishwas",
      email: "a@yahoo.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>{user?.name}</button>
      <button onClick={handleLogout}>{user?.email}</button>
      <h1>{user ? "loggedin" : "loggedout"}</h1>
    </div>
  );
};

export default User;
