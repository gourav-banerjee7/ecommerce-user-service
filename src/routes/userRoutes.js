import { Router } from "express";
import UserController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", (req, res) => UserController.registerUser(req, res));
router.post("/login", (req, res) => UserController.loginUser(req, res));
router.get("/profile", authMiddleware, (req, res) =>
  UserController.getUserProfile(req, res)
);
router.put("/profile", authMiddleware, (req, res) =>
  UserController.updateUserProfile(req, res)
);
router.post("/address", authMiddleware, (req, res) =>
  UserController.addAddress(req, res)
);
router.get("/address", authMiddleware, (req, res) =>
  UserController.getAddress(req, res)
);

export default router;
