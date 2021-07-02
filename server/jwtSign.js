import fs from 'fs'
import jwt from 'jsonwebtoken'

// signing variables
const signOptions = {
  // issuer
  issuer: "AMG Click Server",
  // subject
  subject: "affiliate links",
  // audience
  audience: "raboom",
  // expitation time
  expiresIn: "1h",
  // required algo to use
  // with private/public keys
  algorithm: "RS256"
};

const privateKey = fs.readFileSync("./server/private.pem","utf-8")

export function signJwt(payload){
  const token = jwt.sign(payload,privateKey,signOptions)
  return token
}
