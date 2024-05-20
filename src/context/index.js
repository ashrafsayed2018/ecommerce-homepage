"use client";
import { getSettingsService } from "@/services/setting";
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
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);
  const [addressFormData, setAddressFormData] = useState({
    fullName: "",
    address: "",
    country: "",
    city: "",
    postalCode: "",
  });
  const [siteSetting, setSiteSetting] = useState({
    siteName: "متجر تهاني السعيدي",
    siteDescription: "تصاميم تهاني السعيد بالحلة الجديده",
    logoUrl: "/images/tahani_logo.jpg",
  });
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      const userData = JSON.parse(localStorage.getItem("user")) || {};

      // Check if user data has changed
      if (JSON.stringify(userData) !== JSON.stringify(user)) {
        setUser(userData);
      }

      const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      // Check if cart items have changed
      if (JSON.stringify(getCartItems) !== JSON.stringify(cartItems)) {
        setCartItems(getCartItems);
      }
    } else {
      // make use un authenticated
      setIsAuthUser(false);
      setUser({});
    }
  }, [Cookies.get("token")]);
  useEffect(() => {
    async function fetchSiteSettings() {
      try {
        const response = await getSettingsService();
        if (response) {
          setSiteSetting(response.data);
        }
      } catch (error) {
        setSiteSetting({
          siteName: "متجر تهاني السعيدي",
          siteDescription: "تصاميم تهاني السعيد بالحلة الجديده",
          logoUrl: "/images/tahani_logo.jpg",
        });
        console.error("Error fetching site settings:", error);
      }
    }

    fetchSiteSettings();
  }, []);
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
        cartItems,
        setCartItems,
        address,
        setAddress,
        addressFormData,
        setAddressFormData,
        orderDetails,
        setOrderDetails,
        siteSetting,
        setSiteSetting,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
