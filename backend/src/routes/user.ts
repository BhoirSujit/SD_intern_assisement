import { Router } from "express";

import * as User from "../controllers/user";

const router = Router();

//insert
router.post("/", User.createUser);

//update
router.put("/:id", User.updateUser);

//read
router.get("/", User.getAllUsers);
router.get("/:id", User.getUser);

//delete
router.delete("/:id", User.deleteUser);

export default router;
