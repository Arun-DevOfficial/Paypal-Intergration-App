import got from "got";
import { config as configDotenv } from "dotenv";

configDotenv();

const getAccessToken = async () => {
  try {
    const response = await got.post(
      `${process.env.PAYPAL_API_URL}/v1/oauth2/token`,
      {
        searchParams: {
          grant_type: "client_credentials",
        },
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`
          ).toString("base64")}`,
        },
        responseType: "json", // Automatically parses JSON response
      }
    );
    // console.log(response.body);
    const newAccessToken = response.body.access_token; // Corrected property name
    return newAccessToken;
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response?.body || error.message
    );
    throw error;
  }
};

export default getAccessToken;
