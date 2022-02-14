import styled from "styled-components";

export const Button = styled.button`
  font-family: Inter;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  width: ${({ width }) => width || "initial"};
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-width: ${({ borderWidth }) => borderWidth || "1px"};
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor || "initial"};
  border-radius: ${({ radius }) => radius || 0};
`;
