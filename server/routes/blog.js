//lets generate diff diff routes
import express from "express";
import AuthController from "../controllers/authController.js";
const router = express.Router();

router.post("/user/register",AuthController.userRegistration);
router.get("/user/login",AuthController.userLogin);



export default router;
