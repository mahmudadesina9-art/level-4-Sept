"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NotfoundPage = () => {
  const router = useRouter();
  const [currTime, setCurrTime] = useState<number>(15);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrTime((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timeInterval);
          router.push("/");
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="text-5xl text-red-700 text-center mt-20">
      <h1>Seems you are lost. Let's take you back home in {currTime}</h1>
    </div>
  );
};

export default NotfoundPage;
