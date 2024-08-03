import UserRepository from "../repositories/UserRepository.js";
import AuthService from "./AuthService.js";
import KafkaProducer from "../utils/KafkaProducer.js";

class UserService {
  async registerUser(userData) {
    const existingUser = await UserRepository.findUserByEmail(userData.email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const hashedPassword = await AuthService.hashPassword(userData.password);
    const user = await UserRepository.createUser({
      ...userData,
      password: hashedPassword,
    });

    const event = {
      type: "UserRegistered",
      payload: { id: user.id, email: user.email, name: user.name },
    };
    await KafkaProducer.publishEvent("UserEvents", event);

    return user;
  }

  async loginUser(email, password) {
    const user = await UserRepository.findUserByEmail(email);
    if (
      !user ||
      !(await AuthService.comparePassword(password, user.password))
    ) {
      throw new Error("Invalid email or password");
    }

    const token = AuthService.generateToken(user);
    return { user, token };
  }

  async getUserProfile(userId) {
    return await UserRepository.findUserById(userId);
  }

  async updateUserProfile(userId, updateData) {
    await UserRepository.updateUser(userId, updateData);
    return await UserRepository.getUserById(userId);
  }

  async addAddress(userId, addressData) {
    return await UserRepository.addAddress({ userId, ...addressData });
  }

  async getAddress(userId) {
    return await UserRepository.getAddress(userId);
  }
}

export default new UserService();
