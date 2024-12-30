"use client"
import React, { useState, useEffect } from "react";
import styles from "./style.module.css"

const Notification = ({ message, duration }: { message: string; duration: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!visible) return null;
  return (
    <div className={styles["notification"]}>
      <p>{message}</p>
      <div className={styles["progress-bar"]}></div>
    </div>
  );
};
export default Notification;
