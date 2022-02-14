export default function Homepage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "16px" }}>
      {/* Top Nav */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ marginRight: "16px" }}>
          <ion-icon name="arrow-back-outline" size="large"></ion-icon>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Alamat pengantaran</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
            }}
          >
            <p style={{ paddingRight: "4px" }}>Tokopedia tower</p>
            <ion-icon name="chevron-down-outline"></ion-icon>
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
        <button
          style={{
            backgroundColor: "#424749",
            color: "#f1f1f2",
            padding: "8px 16px",
            margin: 0,
            borderRadius: "4px",
            width: "100%",
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: 1.5,
          }}
        >
          Lunch
        </button>
        <button
          style={{
            backgroundColor: "#f1f1f2",
            color: "#424749",
            padding: "8px 16px",
            margin: 0,
            borderRadius: "4px",
            width: "100%",
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: 1.5,
          }}
        >
          Dinner
        </button>
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