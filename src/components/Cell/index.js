import React from "react";

import { CellStyles } from "./styles";
import { TETROMINOS } from "../../tetrominos";

const Cell = ({ type }) => (
  <CellStyles color={TETROMINOS[type].color} type={type}>
    {console.log("re-render")}
  </CellStyles>
);

export default React.memo(Cell);
