import express from "express";
import auth from "./src/route/authRoute.js";

const PORT = 5001;

const app = express();
app.use(express.json());

app.use("/auth", auth);
app.listen(PORT, () => {
  console.log(`sever is ruuing ${PORT}`);
});
