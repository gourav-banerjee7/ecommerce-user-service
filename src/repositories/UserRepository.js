import User from "../models/User.js";
import Address from "../models/Address.js";

class UserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findUserByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async updateUser(userId, updateData) {
    return await User.update(updateData, { where: { id: userId } });
  }

  async getUserById(userId) {
    return await User.findByPk(userId);
  }

  async addAddress(addressData) {
    return await Address.create(addressData);
  }

  async getAddress(userId) {
    return await Address.findAll({ where: { userId } });
  }
}

export default new UserRepository();
