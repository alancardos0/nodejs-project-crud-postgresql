import { Router,Request,Response,NextFunction } from "express";

const usersRoute = Router();

usersRoute.get('/users',(req:Request, res:Response, next:NextFunction) =>{
    const users = [{
      "name":"Alan",
      "age":"19"
    }];
    res.status(200).send(users);
});

export default usersRoute;