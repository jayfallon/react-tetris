import styled from "styled-components";

export const DisplayStyles = styled.div`
  background: #121212;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  border-radius: 20px;
  width: 100%;
  color: ${props => (props.gameOver ? "red" : "#999")};
  font-family: Pixel;
  font-size: 0.8rem;
  line-height: 1.25;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
