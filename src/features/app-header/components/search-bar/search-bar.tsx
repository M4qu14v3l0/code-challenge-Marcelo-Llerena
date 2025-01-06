import { useState } from "react";
import styles from "./search-bar.module.css";
import SearchIcon from "@/assets/svgs/search.svg?react";

export default function SearchBar() {
  // After >= 500px pointer events are turn off
  const [displayInput, setDisplayInput] = useState(false);
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={`${styles.searchInput} ${
          displayInput ? styles.inputShow : ""
        }`}
        placeholder="Search"
      />
      <SearchIcon
        onClick={() => setDisplayInput(!displayInput)}
        className={styles.searchIcon}
      />
    </div>
  );
}
