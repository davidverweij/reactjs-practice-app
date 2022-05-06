import React, { useContext } from "react";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import SortBySelector from "../../components/SortBySelector/SortBySelector";
import LanguageContext from "../../core/contexts/i18y";

import styles from "./FilterBar.module.scss";

const FilterBar = (): JSX.Element => {
  const { constants } = useContext(LanguageContext);

  const genresUpper = Object.values(constants.GENRES).map((g) =>
    g.toUpperCase()
  );
  const sortUpper = Object.values(constants.SORTOPTIONS).map((s) =>
    s.toUpperCase()
  );

  return (
    <div className={styles.selector}>
      <GenreSelector genres={genresUpper} />
      <SortBySelector sortby={sortUpper} />
    </div>
  );
};

export default FilterBar;
