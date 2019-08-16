import React from "react";

import { StartButtonStyles } from "./styles";

const StartButton = ({ callback }) => {
  return <StartButtonStyles onClick={callback}>Start Game</StartButtonStyles>;
};

export default StartButton;
