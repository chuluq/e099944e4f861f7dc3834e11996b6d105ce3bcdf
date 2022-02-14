import styled from "styled-components";

export default function Text({
  children,
  fontSize,
  fontWeight,
  color,
  textTransform,
}) {
  const Text = styled.h1`
    font-family: Inter;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    color: ${color};
    text-transform: ${textTransform};
  `;

  return <Text>{children}</Text>;
}
