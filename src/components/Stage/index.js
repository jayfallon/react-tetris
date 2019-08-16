import React from "react";
import Cell from "../Cell";
import Aux from "../../hoc/aux";

const Stage = ({ stage }) => (
  <Aux>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </Aux>
);

export default Stage;
