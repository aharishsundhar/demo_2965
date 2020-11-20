import * as mongoose from 'mongoose';
import UsersModel from '../models/Users';
import { CustomLogger } from '../config/Logger'


export class UsersDao {
    private Users = UsersModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into UsersDao.ts: GpGetAllValues')

this.Users.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UsersDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(UsersData, callback){
new CustomLogger().showLogger('info', 'Enter into UsersDao.ts: GpCreate')
let temp = new UsersModel(UsersData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UsersDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}