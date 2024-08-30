<<<<<<< HEAD
import {v2 as cloudinary} from "cloudinary";
=======
import { v2 as cloudinary } from "cloudinary";
>>>>>>> 16941003efc7d7482b012d6cf7b8613fd2acd04d
import http from "http";
import connectDB from "./utils/db";
import { initSocketServer } from "./socketServer";
import { app } from "./app";
<<<<<<< HEAD
require("dotenv").config();
const server = http.createServer(app);


// cloudinary config
cloudinary.config({
 cloud_name: process.env.CLOUD_NAME,
 api_key: process.env.CLOUD_API_KEY,
 api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

// create server
server.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    connectDB();
});
=======
import dotenv from "dotenv"; // Import dotenv directly for clarity
dotenv.config();

const server = http.createServer(app);


// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// Initialize socket server
initSocketServer(server);

// Connect to database
connectDB();

// Start the server
const PORT = process.env.PORT || 8000; // Default to 8000 if PORT is not defined in .env
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
>>>>>>> 16941003efc7d7482b012d6cf7b8613fd2acd04d
