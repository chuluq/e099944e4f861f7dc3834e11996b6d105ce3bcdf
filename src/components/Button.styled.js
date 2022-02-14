import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: Inter;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  text-transform: ${({ textTransform }) => textTransform || "capitalize"};
  color: ${({ color }) => color || "#fff"};
  width: ${({ width }) => width || "initial"};
  padding: ${({ padding }) => padding || "8px 0"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ radius }) => radius};
`;
