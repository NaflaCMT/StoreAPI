const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const productRouter = require("./Routes/products");
const notFoundMiddleware = require("./Middlewares/errorHandler");
const errorMiddleware = require("./Middlewares/errorHandler");
const connectDB = require("./Db/connect");

app.use("/api/v1/products", productRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server is listening to ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
