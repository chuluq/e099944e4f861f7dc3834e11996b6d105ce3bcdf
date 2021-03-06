import { Fragment, useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import { useSelector, useDispatch } from "react-redux";
import { showCart, addOrderCount, addOrderDetails } from "../redux/cartSlice";

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
  const orderCount = useSelector((state) => state.cart.orderCount);
  const orderDetails = useSelector((state) => state.cart.orderDetails);

  const dispatch = useDispatch();

  const LUNCH = "LUNCH";
  const DINNER = "DINNER";

  const [isModalOpen, setModalOpen] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(true);
  const [isBtnActive, setBtnActive] = useState(LUNCH);
  let [locationList, setLocationList] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("Tokopedia Tower");

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

    // eslint-disable-next-line
  }, [search]);

  // Calculate total price
  useEffect(() => {
    let sum = 0;

    if (orderCount > 0 && orderDetails) {
      sum = orderDetails?.reduce((sum, { price }) => {
        return sum + price;
      }, 0);
    }

    setTotalPrice(sum);
  }, [orderCount, orderDetails]);

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

  const handleClickOption = (option) => {
    setBtnActive(option);
  };

  const handleAddOrder = (order) => {
    dispatch(showCart());
    dispatch(addOrderCount());
    dispatch(addOrderDetails(order));
  };

  const handleAddLocation = (loc) => {
    setSelectedLocation(loc);
    setModalOpen(false);
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
                  color="#424749"
                  textTransform="capitalize"
                >
                  {selectedLocation}
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
              color={isBtnActive === LUNCH ? "#f1f1f2" : "#6e7679"}
              bgColor={isBtnActive === LUNCH && "#424749"}
              borderColor={!isBtnActive === LUNCH && "#6e7679"}
              borderWidth="1px 0 1px 1px"
              radius="4px 0 0 4px"
              width="100%"
              onClick={() => handleClickOption(LUNCH)}
            >
              Lunch
            </StyledButton>
            <StyledButton
              color={isBtnActive === DINNER ? "#f1f1f2" : "#6e7679"}
              bgColor={isBtnActive === DINNER && "#424749"}
              borderColor={!isBtnActive === DINNER && "#6e7679"}
              borderWidth="1px 1px 1px 0"
              radius="0 4px 4px 0"
              width="100%"
              onClick={() => handleClickOption(DINNER)}
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
              Kamis. 13 Maret 2019
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
                  addOrder={() => handleAddOrder(item)}
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
                      <div
                        className="location-details"
                        key={index}
                        onClick={() => handleAddLocation(item?.name)}
                      >
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
                      <div
                        className="location-details"
                        key={index}
                        onClick={() => handleAddLocation(item?.name)}
                      >
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
            <p className="items-price">
              {orderCount} items |{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(totalPrice)}
            </p>
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
