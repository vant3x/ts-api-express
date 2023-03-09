import { Auth } from './../interfaces/auth.interface';
import { User } from './../interfaces/user.interface';
import UserModel from '../models/User';

const createNewUser = async ({email, password, firstname, lastname}: User) => {
    const checkUser = await UserModel.findOne({email});
    if (checkUser) return "AlREADY_USER";
    const newUser = await UserModel.create({email, password, firstname, lastname})
}

const loginUser = async () => {

}

export { createNewUser, loginUser };