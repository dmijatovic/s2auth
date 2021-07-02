import fs from "fs";
import jwt from "jsonwebtoken";

import signOptions from "../signOptions.js";

const publicKey = fs.readFileSync("./consumer/public.pem", "utf-8");

export function verifyJwt(token) {
  console.log("verifyJwt...token..", token);

  const decoded = jwt.verify(token, publicKey, signOptions);

  console.log("verifyJwt...decoded...", decoded);

  if (decoded && decoded.iss === signOptions.issuer) {
    return true;
  }

  return false;
}
