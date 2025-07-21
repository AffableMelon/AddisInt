import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/index.js";
import styled from "@emotion/styled";
import SongDisplayer from "./components/SongDisplayer.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary[300]};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
`;
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <SongDisplayer> </SongDisplayer>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
