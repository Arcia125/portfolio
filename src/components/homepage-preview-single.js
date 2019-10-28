import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import styles from "./homepage-preview-single.module.css";

const HomepagePreviewSingle = ({
  className,
  name,
  description,
  image,
  link
}) => (
    <div className={styles.container}>
      <Link
        to={link}
        className={classNames(styles.homepagePreviewSingle, className)}
      >
        <div className={styles.homepagePreviewSingleImageContainer}>{image}</div>
        <div className={styles.homepagePreviewSingleContent}>
          <h3 className={styles.homepagePreviewSingleName}>{name}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );

export { HomepagePreviewSingle };
