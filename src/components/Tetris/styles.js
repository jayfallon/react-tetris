import styled from "styled-components";

import bgImage from "../../img/bg.png";

export const TetrisWrapperStyles = styled.div`
  background: url(${bgImage}) #000;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const TetrisStyles = styled.div`
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
  display: flex;
  justify-content: flex-start;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
