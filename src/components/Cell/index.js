import React from "react";

import { CellStyles } from "./styles";
import { TETROMINOS } from "../../tetrominos";

const Cell = ({ type }) => (
  <CellStyles color={TETROMINOS["L"].color} type={"L"} />
);

export default Cell;
