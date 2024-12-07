import got from "got";
import getAccessToken from "../Utils/Token.js";

const createOrder = async (req, res) => {
  try {
    // Retrieve PayPal Access Token
    const accessToken = await getAccessToken();
    // Prepare the PayPal Order
    const response = await got.post(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        json: {
          intent: "CAPTURE",
          purchase_units: [
            {
              items: [
                {
                  name: req.body.name || "T-shirt",
                  description:
                    req.body.description || "Purchase a quality T-shirt.",
                  quantity: req.body.quantity || 1,
                  unit_amount: {
                    currency_code: "USD",
                    value: req.body.price || 49.0,
                  },
                },
              ],
              amount: {
                currency_code: "USD",
                value: req.body.price || 49.0,
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: req.body.price || 49.0,
                  },
                },
              },
            },
          ],
          application_context: {
            brand_name: "Dark Hand",
            locale: "en-US",
            return_url: `http://localhost:5173/success`,
            cancel_url: `${process.env.PAYPAL_REDIRECT_BASE_URL}/failure`,
            user_action: "PAY_NOW", // Immediate payment prompt
          },
        },
        responseType: "json", // Return type
      }
    );
    const orderId = response.body?.id;
    console.log(orderId);

    // Log and send order details
    return res.status(200).json({
      message: "Order created successfully.",
      orderId,
    });
  } catch (error) {
    console.error(
      "Error creating PayPal order:",
      error.response?.body || error.message
    );
    return res.status(500).json({
      error: "Internal Server Error.",
      details: error.response?.body || error.message,
    });
  }
};

export { createOrder };
