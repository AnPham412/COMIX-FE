import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider>
              <ScrollToTop/>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;