import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';
import morgan from 'morgan';

import { connectDB, sequelize } from "./utils/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream('/var/log/app.log', { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.use("/api/users", userRoutes);

const startServer = async () => {
  await connectDB();
  await sequelize.sync(); // This will create the table if it does not exist
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
