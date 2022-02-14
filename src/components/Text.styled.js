import styled from "styled-components";

export const StyledText = styled.p`
  font-family: Inter;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "#fff"};
  text-transform: ${({ textTransform }) => textTransform || "none"};
  margin: ${({ margin }) => margin || 0};
`;
