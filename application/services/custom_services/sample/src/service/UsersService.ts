import { Request, Response } from 'express';
import {UsersDao} from '../dao/UsersDao';
import { CustomLogger } from '../config/Logger'
let Users = new UsersDao();

export class UsersService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UsersService.ts: GpGetAllValues')
     
     Users.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from UsersService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UsersService.ts: GpCreate')
     const  UsersData = req.body;
     Users.GpCreate(UsersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UsersService.ts: GpCreate')
         callback(response);
         });
    }


}