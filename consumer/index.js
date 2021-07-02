import express from "express";
import { tokenGuard } from "./protect.js";

const app = express();

const PORT = 5001;

app.get("/", async (req, res) => {
  res.json({
    message: "consumer works",
  });
});

app.get("/protected", tokenGuard, (req, res) => {
  res.json({
    message: "GREAT! you have valid token",
  });
});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
