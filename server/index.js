import express from "express";

import { signJwt } from "./jwtSign.js";

const app = express();

const PORT = 5000;

app.get("/", async (req, res) => {
  res.json({
    message: "it works",
  });
});

// sign token
app.get("/token", (req, res) => {
  const user = {
    name: "Test name",
    role: "admin",
    scopes: "affiliate_link",
  };
  const token = signJwt(user);

  res.json({
    token,
  });
});

app.get("/validate", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
