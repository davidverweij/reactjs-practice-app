import React from "react";

import classes from "./StaticHeader.module.css";

class StaticHeader extends React.PureComponent {
  render() {
    return (
      <header className={classes.header}>
        <h3>A counter, searchbar and toggle</h3>
      </header>
    );
  }
}

export default StaticHeader;
