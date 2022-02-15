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

import { foods } from "../constants/foods";
import { locations } from "../constants/locations";

export default function Homepage() {
  const isCartVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(true);
  let [locationList, setLocationList] = useState([]);
  const [search, setSearch] = useState("");

  // Track scroll
  useEffect(() => {
    if (locations) {
      setLocationList(locations);
    }

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);

    // eslint-disable-next-line
  }, []);

  // Search locations
  useEffect(() => {
    if (search) {
      searchLocations(search);
    } else {
      setLocationList(locations);
    }
  }, [search]);

  const handleChangeSearch = (value) => setSearch(value);

  const searchLocations = (keyword) => {
    const searchTerm = keyword.toLowerCase();

    const searchResults = locationList.filter((item) => {
      return (
        item?.name?.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        item?.street?.toLowerCase().match(new RegExp(searchTerm, "g"))
      );
    });

    setLocationList(searchResults);
  };

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

        <div
          style={{ padding: isCartVisible ? "16px 16px 56px" : "16px" }}
          id="date"
          className="date-container"
        >
          {/* Date */}
          <div className="date">
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
          <div className="cards">
            {foods?.map((item) => {
              const { id, menu, restaurant, price, rating, img } = item;

              return (
                <Card
                  key={id}
                  id={id}
                  menu={menu}
                  restaurant={restaurant}
                  price={price}
                  rating={rating}
                  image={img}
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
              <input
                type="text"
                placeholder="Search location..."
                value={search}
                onChange={(e) => handleChangeSearch(e.target.value)}
              />
            </div>

            {/* List location */}
            <div className="location-list">
              {locationList.length > 0
                ? locationList?.map((item, index) => {
                    return (
                      <div className="location-details" key={index}>
                        <i className="material-icons">location_on</i>
                        <div className="location-name">
                          <p className="title">{item?.name}</p>
                          <p className="street">{item?.street}</p>
                        </div>
                      </div>
                    );
                  })
                : locations?.map((item, index) => {
                    return (
                      <div className="location-details" key={index}>
                        <i className="material-icons">location_on</i>
                        <div className="location-name">
                          <p className="title">{item?.name}</p>
                          <p className="street">{item?.street}</p>
                        </div>
                      </div>
                    );
                  })}
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
