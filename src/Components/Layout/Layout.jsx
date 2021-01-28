import React from "react";
import PropTypes from "prop-types";

import styles from "./Layout.module.css";

function Layout({ id, title, desk, urlBg, colorBg }) {
  return (
    <section
      className={styles.root}
      id={id}
      style={{ backgroundImage: `url(${urlBg})` }}
    >
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={styles.desc} className={styles.full}>
            <p style={{ backgroundColor: `${colorBg}` }}>{desk}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  desk: PropTypes.string,
  urlBg: PropTypes.string,
  colorBg: PropTypes.string,
};

export default Layout;
