require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

//database connection
connection();

//middleware
app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});