import React from "react";
import styles from "./bubble.module.css";

const BubbleText = () => {
  return (
    <h2 className="text-center text-3xl sm:text-5xl font-thin text-indigo-300 cursor-pointer">
      {"SOFTWARE DEVELOPER".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;