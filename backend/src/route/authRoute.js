import express from "express";
import { Signup, login } from "../controller/authController.js";
import { validate } from "../middleware/validate.js";
import {
  signupSchema,
  loginSchema,
} from "../middleware/Validation/authValidation.js";
const router = express.Router();

router.post("/signup", validate(signupSchema), Signup);
router.post("/login", validate(loginSchema), login);

export default router;
