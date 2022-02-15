import styled from "styled-components";

export const StyledAddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px 16px;
  margin: 8px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.stickyCart};

  .items {
    .items-price {
      font-family: Inter;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.25;
      color: ${({ theme }) => theme.colors.outlineBorder};
    }

    .items-info {
      font-family: Inter;
      font-size: 14px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.outlineBorder};
    }
  }

  .icons i {
    color: ${({ theme }) => theme.colors.outlineBorder};
  }
`;
