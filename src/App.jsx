import { useEffect, useState } from "react";
import styles from "./App.module.css";
import bgVideo from "../golden.mp4";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });
  return (
    <>
      <video
        className={styles["bgVideo"]}
        src={bgVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className={styles["container"]}>
        <span className={styles["before"]}></span>
        <p className={styles["uz"]}>Uzbeksitan</p>
        <h1 className={styles["time"]}>
          {time.toLocaleTimeString().replace(/AM|PM/g, "")}
        </h1>
      </div>
    </>
  );
}

export default App;
