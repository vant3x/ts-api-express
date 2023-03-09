import { Router } from "express";
import { signupController, loginController  } from "../controllers/auth.controller";

const router = Router();
/**
 * http://localhost:3000/api/auth/register [POST]
 */

router.post('/signup', signupController);
router.post('/login', loginController);

export { router }       