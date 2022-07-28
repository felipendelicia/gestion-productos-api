import { Router } from "express";
import verifyToken from "../middlewares/auth";
import {
  getallclients,
  getclient,
  deleteclient,
  editclient,
  postclient,
} from "../controllers/clients.controller";

const clients_router = Router();

// Get all clients
clients_router.get("/all", getallclients);

// Post a client
clients_router.post("/new", verifyToken, postclient);

// Get a client
clients_router.get("/:id", verifyToken, getclient);

// Delete a client
clients_router.delete("/:id", verifyToken, deleteclient);

// Edit a client
clients_router.put("/:id", verifyToken, editclient);


export default clients_router;
