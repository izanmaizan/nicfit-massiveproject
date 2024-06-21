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
import { verifyToken } from "../middleware/VerifyToken.js";

// users
router.get("/users", getUsers); // done
router.get("/me", verifyToken, Me); // done
router.post("/users", Register); // done
router.post("/login", Login); // done
router.post("/logout", verifyToken, Logout); // done
router.put("/update/:id", verifyToken, updateUsersWithToken); // done
router.delete("/delete", verifyToken, deleteUser);

export default router;
