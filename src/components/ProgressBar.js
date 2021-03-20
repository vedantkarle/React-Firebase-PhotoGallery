import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url, error } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
