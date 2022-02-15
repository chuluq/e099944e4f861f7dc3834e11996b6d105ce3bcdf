import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { Homepage } from "./pages";
// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";

const theme = {
  colors: {
    addCart: "#f9234a",
    stickyCart: "#a23530",
    mainText: "#424749",
    lunchBtn: "#424749",
    activeDate: "#424749",
    subText: "#6e7679",
    ratingValue: "#6e7679",
    pickerIcon: "#e2e4e4",
    outlineBorder: "#f1f1f2",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Homepage />
      </Fragment>
    </ThemeProvider>
  );
}
