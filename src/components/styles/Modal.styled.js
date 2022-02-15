import styled from "styled-components";

export const StyledModal = styled.div`
  padding: 16px;

  p {
    font-family: Inter;
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainText};
  }

  .search {
    margin-top: 16px;
    padding: 8px;
    display: flex;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.outlineBorder};

    i {
      color: ${({ theme }) => theme.colors.addCart};
      padding: 4px;
    }

    input {
      font-size: 16px;
      width: 100%;
      outline: none;
      border: none;
      padding: 8px;
      color: ${({ theme }) => theme.colors.subText};
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.subText};
    }
  }

  .location-list {
    margin-top: 16px;

    .location-details {
      display: flex;
      align-items: center;

      i {
        background-color: ${({ theme }) => theme.colors.pickerIcon};
        color: ${({ theme }) => theme.colors.ratingValue};
        border-radius: 50%;
        padding: 4px;
      }

      .location-name {
        margin-left: 16px;
        padding: 16px 0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.colors.outlineBorder};

        .title {
          font-family: Inter;
          font-size: 20px;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.mainText};
        }

        .street {
          margin-top: 4px;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.mainText};
        }
      }
    }
  }
`;
