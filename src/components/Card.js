import { StyledCard } from "./styles/Card.styled";
import { StyledText } from "./styles/Text.styled";
import { StyledButton } from "./styles/Button.styled";

export default function Card({ menu, restaurant, price, rating, showCart }) {
  return (
    <StyledCard>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="food"
      />
      <div style={{ padding: "16px" }}>
        {/* Rate */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledText
            fontSize="16px"
            fontWeight="500"
            color="#6e7679"
            margin="0 4px 0 0"
          >
            {rating}
          </StyledText>
          {Array.from({ length: rating }, (item, index) => (
            <i
              key={index}
              className="material-icons"
              style={{ fontSize: "14px", color: "#f9234a" }}
            >
              star
            </i>
          ))}
        </div>
        <div style={{ marginTop: "8px", marginBottom: "16px" }}>
          <StyledText
            fontSize="16px"
            fontWeight="bold"
            color="#6e7679"
            textTransform="capitalize"
          >
            {menu}
          </StyledText>
          <StyledText
            fontSize="12px"
            fontWeight="400"
            color="#424749"
            textTransform="capitalize"
            margin="4px 0 0 0"
          >
            by {restaurant}
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
            Rp {price}
          </StyledText>
          <StyledButton
            bgColor="#f9234a"
            padding="8px 16px"
            radius="4px"
            borderWidth="0"
            borderColor="#6e7679"
            textTransform="uppercase"
            fontWeight="normal"
            onClick={showCart && showCart}
          >
            Add +
          </StyledButton>
        </div>
      </div>
    </StyledCard>
  );
}
