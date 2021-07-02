import { verifyJwt } from "./jwtVerify.js";

function notAuthorized(res) {
  res.sendStatus(401);
  res.end();
}

export function tokenGuard(req, res, next) {
  try {
    // extract token
    const authHeader = String(req.headers["authorization"] || "");
    if (authHeader && authHeader.startsWith("Bearer")) {
      const [bearer, token] = authHeader.split(" ");
      if (token) {
        const valid = verifyJwt(token);
        if (valid === true) {
          return next();
        }
        return notAuthorized(res);
      }
      return notAuthorized(res);
    }
    return notAuthorized(res);
  } catch (e) {
    console.error("tokenGuard...failed...", e.message);
    notAuthorized(res);
  }
}
