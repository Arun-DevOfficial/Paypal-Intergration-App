import express from "express";
import { configDotenv } from "dotenv";
import paypalRoutes from "./Routes/Paypal.js";
import cors from "cors";

//express app setup
const server = express();
configDotenv(); //dot environment variable config
const PORT = process.env.PORT || 4000; // Port no.

//Middleware
server.use(express.json());
server.use(cors());
// App routes
server.use("/paypal", paypalRoutes);

//Server listen
server.listen(PORT, () => {
  console.log(`Server is listenig on port ${PORT}`);
});
