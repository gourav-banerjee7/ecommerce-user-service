import AuthService from "../services/AuthService.js";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const decoded = AuthService.validateToken(token);
  if (!decoded) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.user = decoded;
  next();
};

export default authMiddleware;
