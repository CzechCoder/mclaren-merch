import { resolve } from 'path';

import express, { type ErrorRequestHandler } from 'express';
import { apiRouter } from './routers/api';

const server = express();
server.disable('x-powered-by');

server.use(express.json());

server.use('/api', apiRouter);

server.listen(3000, () => {
	console.log('listening on port 3000');
});
