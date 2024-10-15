import React, { useContext } from "react";
import { themeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(themeContext);

  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text }}>
      theme context
    </div>
  );
};

export default Box;
