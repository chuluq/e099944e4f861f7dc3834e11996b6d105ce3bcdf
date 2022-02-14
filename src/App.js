import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { Homepage } from "./pages";

const theme = {
  colors: {
    orange: "#f9234a",
    red: "#a23530",
    darkGrey: "#424749",
    lightGrey: "#6e7679",
    darkWhite: "#e2e4e4",
    lightWhite: "#f1f1f2",
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
