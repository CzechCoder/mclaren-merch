import { resolve } from 'path';

import express, { type ErrorRequestHandler } from 'express';

import { adminRouter } from '~/routers/admin';

const server = express();
server.disable('x-powered-by');

server.use(express.json());

server.use('/admin', adminRouter);

server.use(express.static(resolve(process.cwd(), '..', 'web', 'dist')));

server.use(((err, req, res, next) => {
	if (err) {
		console.log('Error', err);
	} else {
		console.log('404');
	}
}) as ErrorRequestHandler);

const port = Number(process.env.PORT ?? 3000);
server.listen(port, () => {
	console.log(`listening on port ${port}`);
});
