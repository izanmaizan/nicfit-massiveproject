import express from "express";
import {
  getUsers,
  Register,
  Login,
  Me,
  Logout,
  updateUsersWithToken,
  deleteUser,
  updatepassword,
} from "../controllers/Users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/me", Me);
router.post("/logout", Logout);
router.put("/user/update", updateUsersWithToken);
router.put("/user/password", updatepassword);
router.delete("/user/delete", deleteUser);

export default router;
