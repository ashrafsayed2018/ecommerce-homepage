"use client";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  // authentication state
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [loader, setLoader] = useState(false);
  const [pageLoader, setPageLoader] = useState(false);
  const [allOrdersForUser, setAllOrdersForUser] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  // user state
  const [user, setUser] = useState({});

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      const userData = JSON.parse(localStorage.getItem("user")) || {};

      // Check if user data has changed
      if (JSON.stringify(userData) !== JSON.stringify(user)) {
        setUser(userData);
      }

      // const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      // // Check if cart items have changed
      // if (JSON.stringify(getCartItems) !== JSON.stringify(cartItems)) {
      //   setCartItems(getCartItems);
      // }
    } else {
      // make use un authenticated
      setIsAuthUser(false);
      setUser({});
    }
  }, [Cookies.get("token")]);

  return (
    <GlobalContext.Provider
      value={{
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        loader,
        setLoader,
        pageLoader,
        setPageLoader,
        allOrdersForUser,
        setAllOrdersForUser,
        showCartModal,
        setShowCartModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
