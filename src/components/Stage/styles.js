import styled from "styled-components";

export const StageStyles = styled.div`
  background: #111;
  width: 100%;
  max-width: 25vw;
  border: 2px solid #333;
  display: grid;
  grid-gap: 1px;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
`;
