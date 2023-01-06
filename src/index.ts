import express, {Request,Response,NextFunction} from 'express';

const app = express();

app.get('/status',(req:Request, res:Response, next:NextFunction) =>{
  res.status(200).send("Hello World!")
})

app.listen(3000 , ()=> console.log('Server rodando na porta 3000'))