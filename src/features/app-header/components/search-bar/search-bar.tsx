import { useState } from "react";
import styles from "./search-bar.module.css";
import SearchIcon from "@/assets/svgs/search.svg?react";
import { FilterProvider } from "@/app/provider/filter/filter";

export default function SearchBar() {
  // After >= 500px pointer events are turn off
  const [displayInput, setDisplayInput] = useState(false);

  const { setSearchValue } = FilterProvider.useFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={`${styles.searchInput} ${
          displayInput ? styles.inputShow : ""
        }`}
        onChange={handleChange}
        placeholder="Search"
      />

      <SearchIcon
        onClick={() => setDisplayInput(!displayInput)}
        className={styles.searchIcon}
      />
    </div>
  );
}
