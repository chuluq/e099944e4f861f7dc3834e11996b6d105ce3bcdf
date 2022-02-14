import styled from "styled-components";

export const Text = styled.p`
  font-family: Inter;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  color: ${({ color }) => color || "#fff"};
  text-transform: ${({ textTransform }) => textTransform || "none"};
`;
