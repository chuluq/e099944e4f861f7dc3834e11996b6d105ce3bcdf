import { Fragment, useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../redux/cartSlice";

import { StyledContainer } from "../components/styles/Container.styled";
import { StyledHeader } from "../components/styles/Header.styled";
import { StyledButton } from "../components/styles/Button.styled";
import { StyledText } from "../components/styles/Text.styled";
import { StyledAddCart } from "../components/styles/AddCart.styled";
import { StyledModal } from "../components/styles/Modal.styled";
import Card from "../components/Card";

import { foods } from "../constants/data";

export default function Homepage() {
  const isCartVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(true);

  // Track scroll
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = getOffset(document.querySelector("#date"));
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isBtnVisible && // to limit setting state only the first time
        setBtnVisible(false);
    } else {
      setBtnVisible(true);
    }
  };

  const getOffset = (element) => {
    const rect = element?.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  };

  return (
    <Fragment>
      <StyledContainer>
        {/* Top Nav */}
        <StyledHeader>
          <div className="header">
            <div className="arrow-back">
              <i className="material-icons">arrow_back</i>
            </div>
            <div className="header-location">
              <StyledText
                fontSize="12px"
                fontWeight="normal"
                color="#6e7679"
                textTransform="uppercase"
              >
                Alamat pengantaran
              </StyledText>
              <div
                className="header-location-picker"
                onClick={() => setModalOpen(true)}
              >
                <StyledText
                  fontSize="20px"
                  fontWeight="bold"
                  color="#6e7679"
                  textTransform="capitalize"
                >
                  tokopedia tower
                </StyledText>
                <div className="header-location-picker-icon">
                  <i className="material-icons">expand_more</i>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div></div>

          {/* Button */}
          <div
            className="btn-group"
            id="btn-group"
            style={{
              width: "100%",
              marginTop: "16px",
              display: isBtnVisible ? "flex" : "none",
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
        </StyledHeader>

        <div style={{ padding: "16px 16px 56px" }} id="date">
          {/* Date */}
          <div
            className="date"
            style={{
              marginTop: "16px",
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
            className="cards"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            {foods?.map((item) => {
              const { id, menu, restaurant, price, rating } = item;

              return (
                <Card
                  key={id}
                  menu={menu}
                  restaurant={restaurant}
                  price={price}
                  rating={rating}
                  showCart={() => dispatch(showCart())}
                />
              );
            })}
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
          <StyledModal>
            <p>Cek makanan yang tersedia di lokasi kamu!</p>
            <div className="search">
              <i className="material-icons">location_on</i>
              <input type="text" placeholder="Search location..." />
            </div>

            {/* List location */}
            <div className="location-list">
              <div className="location-details">
                <i className="material-icons">location_on</i>
                <div className="location-name">
                  <p className="title">Kulina</p>
                  <p className="street">Jalan Tulodong Atas 28, Senayan</p>
                </div>
              </div>
              <div className="location-details">
                <i className="material-icons">location_on</i>
                <div className="location-name">
                  <p className="title">Kulina</p>
                  <p className="street">Jalan Tulodong Atas 28, Senayan</p>
                </div>
              </div>
              <div className="location-details">
                <i className="material-icons">location_on</i>
                <div className="location-name">
                  <p className="title">Kulina</p>
                  <p className="street">Jalan Tulodong Atas 28, Senayan</p>
                </div>
              </div>
              <div className="location-details">
                <i className="material-icons">location_on</i>
                <div className="location-name">
                  <p className="title">Kulina</p>
                  <p className="street">Jalan Tulodong Atas 28, Senayan</p>
                </div>
              </div>
            </div>
          </StyledModal>
        </BottomSheet>
      </StyledContainer>

      {isCartVisible && (
        <StyledAddCart>
          <div className="items">
            <p className="items-price">5 items | Rp 125,000</p>
            <p className="items-info">Termasuk ongkos kirim</p>
          </div>
          <div className="icons">
            <i className="material-icons">shopping_cart</i>
            <i className="material-icons">chevron_right</i>
          </div>
        </StyledAddCart>
      )}
    </Fragment>
  );
}
