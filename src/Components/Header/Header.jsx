import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.module.css";

function Header({ title, descr }) {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        <h1>{title} </h1>
        <p>{descr}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  descr: PropTypes.string,
};

export default Header;
