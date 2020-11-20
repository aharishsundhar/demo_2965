import { Request, Response } from 'express';
import { UsersService } from '../service/UsersService';
import { CustomLogger } from '../config/Logger'
let Users = new UsersService();

export class UsersController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
Users.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UsersController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UsersController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Users.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UsersController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UsersController.ts: GpCreate');
    })}


}