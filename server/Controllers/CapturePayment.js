import got from "got";
import getAccessToken from "../Utils/Token.js";

const capturePayment = async (req, res) => {
  try {
    // Get access token from utility function
    const accessToken = await getAccessToken();

    // Extract payment ID from the request parameters
    const { paymentId } = req.params;

    if (!paymentId) {
      return res.status(400).json({ message: "Payment ID is required" });
    }

    // Send the capture payment request to PayPal API
    const response = await got.post(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${paymentId}/capture`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        responseType: "json",
      }
    );

    // Correctly extract and log the payment status
    const paymentData = response.body; // Ensure you use `response.body` to access the data
    const paymentStatus = paymentData.status; // Access the `status` property directly from paymentData
    console.log("Payment Status:", paymentStatus);

    // Check the status of the payment
    if (paymentStatus !== "COMPLETED") {
      console.log("Payment was not successful. Redirecting to failure page...");
      return res.redirect("http://localhost:5173/failure");
    }
    
    // Redirect to success page
    console.log("Payment successful");
    return res.json({ paymentData });
} catch (error) {
   res.redirect("http://localhost:5173/failure");
    // Redirect to failure page on error
    return res.json({
      message: "Failed to capture payment.",
      error: error.message || error,
    });
  }
};

export default capturePayment;
