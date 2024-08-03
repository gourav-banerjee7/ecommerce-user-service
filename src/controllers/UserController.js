import UserService from "../services/UserService.js";

class UserController {
  async registerUser(req, res) {
    try {
      const user = await UserService.registerUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.loginUser(email, password);
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  async getUserProfile(req, res) {
    try {
      const userId = req.user.id;
      const user = await UserService.getUserProfile(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUserProfile(req, res) {
    try {
      const userId = req.user.id;
      const updateData = req.body;
      const user = await UserService.updateUserProfile(userId, updateData);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async addAddress(req, res) {
    try {
      const userId = req.user.id;
      const address = await UserService.addAddress(userId, req.body);
      res.status(201).json(address);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAddress(req, res) {
    try {
      const userId = req.user.id;
      const addresses = await UserService.getAddress(userId);
      res.status(200).json(addresses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
