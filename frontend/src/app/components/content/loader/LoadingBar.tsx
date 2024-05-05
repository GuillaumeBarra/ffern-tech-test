'use client';
import { useEffect, useState } from 'react';

export const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-1/3 flex flex-col items-center">
      <div className="mb-8">Loading...</div>
      <div className="flex flex-row w-full h-1 bg-ashLight">
        <div
          className="bg-ashDark h-full rounded-r-md transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};