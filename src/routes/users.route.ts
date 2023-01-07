import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{
    "name": "Alan",
    "age": "19"
  }];
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const userId = req.params.id;
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  res.send(StatusCodes.OK).send(userId)
});

usersRoute.delete('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  res.send(StatusCodes.OK).send("Deletado com sucesso");
});
export default usersRoute;