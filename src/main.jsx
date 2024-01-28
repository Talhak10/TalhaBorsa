import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import Loading from "./components/Loading";
import AppContext from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    publishableKey="pk_test_YmlnLXF1ZXR6YWwtNjAuY2xlcmsuYWNjb3VudHMuZGV2JA"
  >
    <ClerkLoading>
      <Loading inline={false} />
    </ClerkLoading>
    <ClerkLoaded>
      <AppContext>
        <App />
      </AppContext>
    </ClerkLoaded>
  </ClerkProvider>,
);
