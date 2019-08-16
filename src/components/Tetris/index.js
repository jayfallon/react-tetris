import React from "react";

//Components
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";
import Aux from "../../hoc/aux";

const Tetris = () => {
  return (
    <Aux>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </Aux>
  );
};

export default Tetris;
