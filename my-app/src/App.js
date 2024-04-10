import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./components/Login/UserAuthContext";
import Nav from "./components/Nav";
import Basket from "./components/Basket";
import { BasketProvider } from "./components/basketContext";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Main from "./components/Main";
import BookingForm from "./components/Booking/BookingForm";
import BookingConfirmation from "./components/Booking/BookingConfirmation";
import About from "./components/About";
import Specials from "./components/Specials";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Scroll from "./components/Scroll";

import "./App.css";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <div className="App">
          <BasketProvider>
            <Nav />
            <Routes>
              <Route
                path="/*"
                element={
                  <>
                    <Scroll />
                    <Header />

                    <Main />
                  </>
                }
              />
              <Route path="/basket" element={<Basket />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="about" element={<About />} />
              <Route path="specials" element={<Specials />} />
              <Route path="bookingForm" element={<BookingForm />} />
              <Route
                path="bookingConfirmation"
                element={<BookingConfirmation />}
              />{" "}
              
              <Route path="errorPage" element={<ErrorPage />} />
            </Routes>
          </BasketProvider>
          <Footer />
        </div>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
