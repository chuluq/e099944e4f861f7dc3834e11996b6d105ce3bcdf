import { StyledCard } from "./styles/Card.styled";
import { StyledText } from "./styles/Text.styled";
import { StyledButton } from "./styles/Button.styled";

export default function Card({
  id,
  menu,
  restaurant,
  price,
  rating,
  image,
  addOrder,
}) {
  return (
    <StyledCard>
      <img src={image} alt={`food ${id}`} />
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
            color="#424749"
            textTransform="capitalize"
          >
            {menu}
          </StyledText>
          <StyledText
            fontSize="12px"
            fontWeight="400"
            color="#6e7679"
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
            color="#424749"
            textTransform="capitalize"
          >
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(price)}
          </StyledText>
          <StyledButton
            fontSize="14px"
            bgColor="#f9234a"
            padding="8px 16px"
            radius="4px"
            borderWidth="0"
            borderColor="#6e7679"
            textTransform="uppercase"
            fontWeight="500"
            onClick={addOrder}
          >
            Add +
          </StyledButton>
        </div>
      </div>
    </StyledCard>
  );
}
