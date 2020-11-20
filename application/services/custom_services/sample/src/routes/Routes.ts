import { Request, Response, NextFunction } from "express";
import { UsersController } from '../controller/UsersController';


export class Routes {
    private Users: UsersController = new UsersController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Users').get(this.Users.GpGetAllValues);
app.route('/Users').post(this.Users.GpCreate);
     }

}