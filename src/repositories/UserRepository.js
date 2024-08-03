import User from "../models/User.js";

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
}

export default new UserRepository();
