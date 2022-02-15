import { useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { StyledButton } from "../components/styles/Button.styled";
import { StyledText } from "../components/styles/Text.styled";
import Card from "../components/Card";

export default function Homepage() {
  const [isCartVisible, setCartVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        height: "100%",
        width: "100%",
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
          <span className="material-icons">arrow_back</span>
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
            onClick={() => setModalOpen(true)}
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
              <span className="material-icons">expand_more</span>
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
          display: isCartVisible ? "block" : "none",
          backgroundColor: "#a23530",
          position: "sticky",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ color: "#fff" }}>5 items | Rp 125,000</p>
            <p style={{ color: "#fff" }}>Termasuk ongkos kirim</p>
          </div>
          <div>
            <box-icon name="cart" color="white"></box-icon>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BottomSheet
        open={isModalOpen}
        onDismiss={() => setModalOpen(false)}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
      >
        <div style={{ padding: "16px" }}>
          <p>Cek makanan yang tersedia di lokasi kamu!</p>
          <div
            style={{
              marginTop: "16px",
              padding: "8px",
              display: "flex",
              width: "100%",
              border: "1px solid",
            }}
          >
            <i
              className="material-icons"
              style={{ padding: "8px", textAlign: "center", color: "red" }}
            >
              location_on
            </i>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "8px 0",
                outline: "none",
                border: "none",
              }}
            />
          </div>

          {/* List location */}
          <div style={{ marginTop: "32px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="material-icons"
                style={{
                  padding: "4px",
                  textAlign: "center",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                }}
              >
                location_on
              </i>
              <div
                style={{
                  marginLeft: "16px",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid",
                }}
              >
                <p>Kulina</p>
                <p>Jalan Tulodong Atas 28, Senayan</p>
              </div>
            </div>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
