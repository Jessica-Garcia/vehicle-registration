import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { VehiclesProvider } from "./contexts/VehiclesContext";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <VehiclesProvider>
          <Router />
        </VehiclesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
