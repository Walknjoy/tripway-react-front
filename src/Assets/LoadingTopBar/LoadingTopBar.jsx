import React, { useEffect, useState } from 'react';
import './LoadingTopBar.scss'; 
import LoadingBar from 'react-top-loading-bar';

const LoadingTopBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);
  return (
    <>
      <LoadingBar
        className="loading-top-bar"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default LoadingTopBar;
