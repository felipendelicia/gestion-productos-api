import { Router } from "express";
import { login } from "../controllers/login.controller";
const login_router = Router();

// LOGIN
login_router
  .post("/", login);

export default login_router;
