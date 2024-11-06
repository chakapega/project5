'use client';

import { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event: { target: { value: string } }) => setSearchValue(event.target.value);

  return (
    <header className={styles.header}>
      <form>
        <input value={searchValue} onChange={handleSearchInputChange} type="text" placeholder="City" className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </header>
  )
}
