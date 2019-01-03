import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authenticate } from './controllers/authentication';
import jsonServer from 'json-server';
import { isAuthorize } from './middlware/isAuthorize';

const app: express.Application = express();
const router: Router = express.Router();

router.get('/', (request: Request, response: Response) => {
  response.send('hello world !!!');
});
router.post('/authorize', authenticate);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(isAuthorize, jsonServer.router('./mock-data/db.json'));

app.listen(5000, () => {
  console.log('App Launched in 5000 port');
})