import { useState, useEffect } from "react";
import { StyledButton } from "../components/styles/Button.styled";
import { StyledText } from "../components/styles/Text.styled";
import Card from "../components/Card";

export default function Homepage() {
  const [isCartVisible, setCartVisible] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {/* Top Nav */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          width: "100%",
          position: "sticky",
          top: 0,
        }}
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
      <div></div>

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
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div
        style={{
          backgroundColor: "#a23530",
          position: "sticky",
          bottom: 0,
          width: "100%",
        }}
      >
        <p>5 items</p>
      </div>
    </div>
  );
}
