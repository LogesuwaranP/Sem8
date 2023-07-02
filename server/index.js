require("dotenv").config();
const express = require("express");
const app = express();
const sendmail = require("./routes/sendmail");
const postRouter = require("./routes/Posts");
const feedbackRouter = require("./routes/Feedback");
const GroceryRouter = require("./routes/Grocery");
const FashionRouter = require("./routes/Fashion");
const userRouter = require("./routes/Users");
const demoRouter = require("./routes/Demo");
const salesRouter = require("./routes/Sales");
const dataRouter = require("./routes/Data");
const branchesRouter = require("./routes/Branches");
const cors = require("cors")
const db = require("./models");


// middle ware
app.use(express.json());
app.use(cors());
app.use("/send", sendmail)
app.use("/posts", postRouter);
app.use("/feedback", feedbackRouter);
app.use("/grocery/best", GroceryRouter);
app.use("/grocery/highprofit", GroceryRouter);
app.use("/grocery/all", GroceryRouter);
app.use("/grocery/low", GroceryRouter);
app.use("/grocery", GroceryRouter);
app.use("/fashion", FashionRouter);
app.use("/auth", userRouter);
app.use("/demo", demoRouter);
app.use("/sales", salesRouter);
app.use("/data", dataRouter);
app.use("/branch", branchesRouter);
 
db.sequelize.sync().then(() => {

  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });

});