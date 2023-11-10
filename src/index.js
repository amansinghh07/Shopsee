import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-jj86kg6wvm7pxsmt.us.auth0.com"
    clientId="eOLJAlGVXOmOcm6HwXySQxQhQtIR722b"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </Auth0Provider>
);
