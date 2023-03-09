import { Request, Response, NextFunction } from "express";
import { createNewUser, loginUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";


const signupController = async (req: Request, res: Response) => {

} 

const loginController = async (req: Request, res: Response) => {

}

export { signupController, loginController };