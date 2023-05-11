"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  return (
    <main className={styles.main}>
      <div className={styles.buttonContainer}>
        {console.log(progress)}
        <button
           onClick={() => {
            setShowProgress(true);
            const interval = setInterval(() => {
              setProgress((progress) => {
                const newProgress = progress + 13;
                if (newProgress >= 100) {
                  setShowMessage(true);
                  setProgress(0)
                  setShowProgress(false);
                  clearInterval(interval);
                  return 100;
                }
                return newProgress;
              });
            }, 400);
          }}
          className={styles.primaryButton}
        >
          Click To Make Everything Okay
        </button>
      </div>
      {showProgress ? (
        <div className={styles.progressWrapper}>
          <h1>Hang tight while we use our magic to make Everything okay</h1>
          <div className={styles.progressContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : null}

      {showMessage ? (
        <div className={styles.message}>
          <h1>Everything is okay now</h1>
          <p>
            If everything is still not OK, try checking your settings of
            perception of objective reality.
          </p>
          <button
            onClick={() => {
              setShowMessage(!showMessage);
            }}
            className={styles.buttonSecondary}
          >
            Continue
          </button>
        </div>
      ) : null}
    </main>
  );
}
