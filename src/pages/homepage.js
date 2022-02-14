import { StyledButton } from "../components/Button.styled";
import { StyledText } from "../components/Text.styled";
import { StyledCard } from "../components/Card.styled";
import "boxicons";

export default function Homepage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "16px" }}>
      {/* Top Nav */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ marginRight: "16px" }}>
          {/* <ion-icon name="arrow-back-outline" size="large"></ion-icon> */}
          <box-icon name="arrow-back"></box-icon>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledText
            fontSize="12px"
            fontWeight="normal"
            color="#6e7679"
            textTransform="uppercase"
          >
            Alamat pengantaran
          </StyledText>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <StyledText
              fontSize="20px"
              fontWeight="bold"
              color="#6e7679"
              textTransform="capitalize"
            >
              tokopedia tower
            </StyledText>
            <div style={{ marginLeft: "4px" }}>
              <box-icon
                name="chevron-down"
                size="sm"
                color="#f9234a"
              ></box-icon>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}

      {/* Button */}
      <div
        style={{
          width: "100%",
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <StyledButton
          color="#f1f1f2"
          bgColor="#424749"
          width="100%"
          radius="4px 0 0 4px"
          borderWidth="1px 0 1px 1px"
        >
          Lunch
        </StyledButton>
        <StyledButton
          color="#6e7679"
          width="100%"
          radius="0 4px 4px 0"
          borderWidth="1px 1px 1px 0"
          borderColor="#6e7679"
        >
          Dinner
        </StyledButton>
      </div>

      {/* Date */}
      <div
        style={{
          marginTop: "32px",
        }}
      >
        <StyledText
          fontSize="16px"
          fontWeight="bold"
          color="#424749"
          textTransform="capitalize"
        >
          Kamis, 13 Maret 2019
        </StyledText>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="food"
          />
          <div style={{ padding: "16px" }}>
            {/* Rate */}
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <StyledText
                fontSize="16px"
                fontWeight="500"
                color="#6e7679"
                margin="0 4px 0 0"
              >
                4.5
              </StyledText>
              <box-icon
                type="solid"
                name="star"
                size="xs"
                color="#f9234a"
              ></box-icon>
              <box-icon
                type="solid"
                name="star"
                size="xs"
                color="#f9234a"
              ></box-icon>
              <box-icon
                type="solid"
                name="star"
                size="xs"
                color="#f9234a"
              ></box-icon>
              <box-icon
                type="solid"
                name="star"
                size="xs"
                color="#f9234a"
              ></box-icon>
              <box-icon
                type="solid"
                name="star-half"
                size="xs"
                color="#f9234a"
              ></box-icon>
            </div>
            <div style={{ marginTop: "8px", marginBottom: "16px" }}>
              <StyledText
                fontSize="16px"
                fontWeight="bold"
                color="#6e7679"
                textTransform="capitalize"
              >
                Roasted Chicken with Scrambled Egg
              </StyledText>
              <StyledText
                fontSize="12px"
                fontWeight="400"
                color="#424749"
                textTransform="capitalize"
                margin="4px 0 0 0"
              >
                by Kulina &middot; Uptown Luch
              </StyledText>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StyledText
                fontSize="16px"
                fontWeight="bold"
                color="#6e7679"
                textTransform="capitalize"
              >
                Rp 35,000
              </StyledText>
              <StyledButton
                bgColor="#f9234a"
                padding="8px 16px"
                radius="4px"
                borderWidth="0"
                borderColor="#6e7679"
                textTransform="uppercase"
                fontWeight="normal"
              >
                Add +
              </StyledButton>
            </div>
          </div>
        </StyledCard>
      </div>
    </div>
  );
}
