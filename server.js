const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const logger = require("./middleware/loggerMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api",userRoutes);
app.use("/api",recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
console.log(`Server running on port ${PORT}`));