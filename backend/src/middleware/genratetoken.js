import jwt from "jsonwebtoken";

const generate = (userId) => {
  const payload = { userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10s" });
  return token;
};

export default generate;
