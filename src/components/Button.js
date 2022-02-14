import styled from "styled-components";

export default function Button({
  children,
  color,
  bgColor,
  wFull,
  fontSize,
  radius,
}) {
  const Button = styled.button`
    color: ${color};
    background-color: ${bgColor};
    border-radius: ${radius};
    width: ${wFull && "100%"};
    font-family: Inter;
    font-size: ${fontSize ?? "16px"};
    padding-top: 8px;
    padding-bottom: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #f1f1f2;
  `;

  return <Button>{children}</Button>;
}
