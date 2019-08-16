import styled from "styled-components";

export const CellStyles = styled.div`
  background: rgba(${props => props.color}, 0.8);
  width: auto;
  border: ${props => (props.type === 0 ? "0px" : "4px solid")};
  border-top-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-bottom-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.1);
`;
