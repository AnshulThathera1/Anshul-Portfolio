import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

type Props = {
  animationPath: string;
};

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "200px" }} />
});

const GreetingLottie = ({ animationPath }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  if (!isClient) {
    return <div style={{ width: "100%", height: "200px" }} />;
  }

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
