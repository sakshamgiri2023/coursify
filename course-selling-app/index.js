require("dotenv").config();

const express = require("express");

const { userRouter } = require("./Routes/user");

const { courseRouter } = require("./Routes/course");

const { adminRouter } = require("./Routes/admin");

const { default: mongoose } = require("mongoose");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  app.listen(3000);
  await mongoose.connect(process.env.MONGOOSE_URL);
  app.listen(3000);
}
