import { Router } from "express";
import {
  createUser,
  deleteUserById,
  findAllUser,
  findUserById,
  updateUser,
} from "../controller/user.controller.js";

const router = Router();

router.post("/createuser", createUser);
router.get("/finduser", findAllUser);
router.post("/finduserbyid/:id", findUserById);
router.delete("/deleteuserbyid/:id", deleteUserById);
router.post("/updateuser", updateUser);

export default router;
