import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Subscription from "./Components/Subscription";
import Failure from "./Components/Failure";
import PaymentSuccess from "./Components/Success";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Subscription />,
  },
  {
    path: "/success",
    element: <PaymentSuccess />,
  },
  {
    path: "/failure",
    element: <Failure />,
  },
]);

function App() {
  const Options = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    intent: "capture",
    vault: "true",
  };

  return (
    <>
      <PayPalScriptProvider options={Options}>
        <RouterProvider router={router} />;
      </PayPalScriptProvider>
    </>
  );
}

export default App;
