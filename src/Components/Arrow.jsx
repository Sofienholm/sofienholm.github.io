import React from  "react";
import styles from "./Arrow.module.css";

export default function arrow() {
    return(
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.scrollDown}>
          <span className={styles.arrowDown}></span>
        </div>
      </div>
    </div>
    )
}