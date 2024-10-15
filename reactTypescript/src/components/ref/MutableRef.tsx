import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const interValRef = useRef<number | null>(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer((v) => v + 1);
    }, 1000);

    return () => {
      window.clearInterval(interValRef);
    };
  }, []);

  return <div>{timer}</div>;
};

export default MutableRef;
