import React, { useState, useEffect } from "react";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [LottieComponent, setLottieComponent] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import react-lottie only on the client side
    import("react-lottie").then((module) => {
      setLottieComponent(() => module.default);
    });
  }, []);

  if (!isClient || !LottieComponent) {
    // Return a placeholder or loading state during SSR
    return (
      <div style={{ width: "100%", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>Loading animation...</div>
      </div>
    );
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      <LottieComponent options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
