import fs from "fs";
import jwt from "jsonwebtoken";

import signOptions from "../signOptions.js";

const privateKey = fs.readFileSync("./server/private.pem", "utf-8");

export function signJwt(payload) {
  const token = jwt.sign(payload, privateKey, signOptions);
  return token;
}

export function verifyJwt(token) {
  const valid = jwt.verify(token, privateKey, signOptions);
  return valid;
}
