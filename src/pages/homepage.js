import { Button } from "../components/Button.styled";
import { Text } from "../components/Text.styled";
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
          <Text
            fontSize="12px"
            fontWeight="normal"
            color="#6e7679"
            textTransform="uppercase"
          >
            Alamat pengantaran
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              fontSize="20px"
              fontWeight="bold"
              color="#424749"
              textTransform="capitalize"
            >
              tokopedia tower
            </Text>
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
        <Button
          color="#f1f1f2"
          bgColor="#424749"
          width="100%"
          radius="4px 0 0 4px"
          borderWidth="1px 0 1px 1px"
        >
          Lunch
        </Button>
        <Button
          color="#6e7679"
          width="100%"
          radius="0 4px 4px 0"
          borderWidth="1px 1px 1px 0"
          borderColor="#6e7679"
        >
          Dinner
        </Button>
      </div>

      {/* Date */}
      <div
        style={{
          marginTop: "32px",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Kamis, 13 Maret 2019
        </p>
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
        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "4px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="food"
            style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          />
          <div style={{ padding: "16px" }}>
            {/* Rate */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>4.5</p>
              <ion-icon name="star"></ion-icon>
            </div>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              Roasted Chicken with Scrambled Egg
            </p>
            <p>by Kulina &middot; Uptown Luch</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Rp 35,000</p>
              <button
                style={{
                  backgroundColor: "#f1f1f2",
                  color: "#424749",
                  padding: "8px 16px",
                  margin: 0,
                  borderRadius: "4px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                }}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
