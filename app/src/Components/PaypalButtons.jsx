import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

export default function PaypalButtons() {
  // Create an order
  const OnCreateOrder = async () => {
    try {
      const response = await axios.post("/paypal/createOrder");
      const { orderId } = response.data;
      console.log("Order ID:", orderId);

      if (!orderId)
        throw new Error("Order ID not found in the server response!");
      return orderId; // Return the orderId to PayPal SDK
    } catch (error) {
      console.error("Error creating order:", error.message || error);
      throw new Error("Failed to create order!");
    }
  };

  // Approve and capture the payment
  const OnApprove = async (data) => {
    try {
      const { orderID } = data; // PayPal SDK returns the orderID on approval
      if (!orderID) throw new Error("Invalid order ID from PayPal!");
      console.log("orderID:", orderID);

      // Call your backend to capture the payment
      const response = await axios.get(
        `/paypal/capturePayment/${orderID}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const captureData = response.data.paymentData;
      console.log("Payment captured successfully:", captureData);
      window.location.href = "/success";

      // Redirect to the success page
    } catch (error) {
      console.error("Error during payment capture:", error.message || error);
      window.location.href = "/failure";
    }
  };

  // Handle errors during PayPal flow
  const OnError = (error) => {
    console.error("Error while processing payment:", error.message || error);
    alert("An error occurred during the payment process. Please try again.");
  };

  return (
    <div>
      <PayPalButtons
        style={{ shape: "pill", layout: "vertical", color: "blue" }}
        createOrder={OnCreateOrder} // Called when the user clicks to create an order
        onApprove={OnApprove} // Called after payment approval
        onError={OnError} // Called if any error occurs
      />
    </div>
  );
}
