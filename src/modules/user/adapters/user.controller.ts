import express, {Request, Response} from 'express'
import { GetAllUsersInteractor } from "../use-cases/get-all-users.interactor";
import { USerStorageGateway } from "./user.storage.gateway";

// Controller (Spring)
export class UserController {
    static async getAll(req: Request, res: Response){
        try{
            const repository = new USerStorageGateway();
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json(data);
        }catch(error){
            console.log(error);
            res.status(400).json({message: 'Error'});
            
        }
    }
}

export const userRouter = express.Router();

userRouter.get('/', [], UserController.getAll);