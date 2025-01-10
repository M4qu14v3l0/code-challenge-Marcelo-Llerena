import { useState } from "react";
import styles from "./search-bar.module.css";
import { FilterProvider } from "@/app/provider/filter/filter";
import DeleteIcon from "@/assets/svgs/delete.svg?react";
import SearchIcon from "@/assets/svgs/search.svg?react";

export default function SearchBar() {
  // After >= 500px pointer events are turn off
  const [displayInput, setDisplayInput] = useState(false);

  const { setSearchValue, searchValue } = FilterProvider.useFilter();

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
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
      />
      <DeleteIcon
        onClick={() => setSearchValue("")}
        className={`${styles.deleteIcon} ${
          searchValue.length > 0 && searchValue && styles.showDeleteIcon
        }`}
      />

      <SearchIcon
        onClick={() => setDisplayInput(!displayInput)}
        className={styles.searchIcon}
      />
    </div>
  );
}
