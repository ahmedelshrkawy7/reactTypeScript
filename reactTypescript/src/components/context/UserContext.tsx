import { createContext, useState } from "react";

export type AuthUser = {
  email: string;
  name: string;
};

type userContextProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

const userContext = createContext<UserContextType | null>(
  {} as UserContextType
);

const UserContext = ({ children }: userContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
