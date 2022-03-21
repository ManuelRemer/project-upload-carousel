const jwt = require("jsonwebtoken");

//custom stuff
const { AuthenticationError } = require("../errors");

const authWithJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new AuthenticationError("invalid authentication header");
  }
  const token = authorization.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: payload.adminName, id: payload.adminId };
    next();
  } catch (err) {
    throw new AuthenticationError("invalid jwt");
  }
};

module.exports = authWithJWT;
