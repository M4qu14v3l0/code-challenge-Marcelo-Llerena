import { useState } from "react";
import styles from "./filter-input.module.css";
import Search from "@/svgs/search.svg?react";

export default function FilterInput() {
  // After >= 500px pointer events are turn off
  const [displayInput, setDisplayInput] = useState(false);
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={`${styles.input} ${displayInput ? styles.inputShow : ""}`}
        placeholder="Search"
      />
      <Search
        onClick={() => setDisplayInput(!displayInput)}
        className={styles.searchIcon}
      />
    </div>
  );
}
