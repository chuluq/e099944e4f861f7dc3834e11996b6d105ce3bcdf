import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  transition: top 0.3s;

  .header {
    display: flex;
    align-items: center;

    .arrow-back {
      margin-right: 16px;

      i {
        color: ${({ theme }) => theme.colors.mainText};
      }
    }

    .header-location .header-location-picker {
      display: flex;
      align-items: center;

      .header-location-picker-icon i {
        color: ${({ theme }) => theme.colors.addCart};
      }
    }
  }
`;
