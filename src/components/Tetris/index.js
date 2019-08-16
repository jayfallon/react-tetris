import React, { useState } from "react";

// styles
import { TetrisWrapperStyles, TetrisStyles } from "./styles";

// custom hooks
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";

//Components
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  return (
    <TetrisWrapperStyles>
      <TetrisStyles>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </TetrisStyles>
    </TetrisWrapperStyles>
  );
};

export default Tetris;
