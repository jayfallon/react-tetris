import React from "react";
import Cell from "../Cell";
import { StageStyles } from "./styles";

const Stage = ({ stage }) => (
  <StageStyles width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StageStyles>
);

export default Stage;
