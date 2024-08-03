import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AuthService {
  generateToken(user) {
    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
  }

  validateToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return null;
    }
  }

  async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }

  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export default new AuthService();
