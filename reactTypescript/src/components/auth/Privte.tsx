import React from "react";

type privteProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType;
};

const Privte = ({ isLoggedIn, Component }: privteProps) => {
  if (isLoggedIn) return <Component />;
  return <div>Privte</div>;
};

export default Privte;
