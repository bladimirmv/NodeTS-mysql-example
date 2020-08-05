import express, { Application } from 'express';
import morgan from 'morgan';

import IndexRoutes from './routes/index.route';
import PostRoutes from './routes/post.route';

export class App {
	private app: Application;

	constructor(private port?: number | string) {
		this.app = express();
		this.settings();
		this.middlewares();
		this.routes();
	}

	private settings() {
		this.app.set('port', this.port || process.env.PORT || 3000);
	}

	middlewares() {
		this.app.use(morgan('dev'));
		// this.app.use(express.urlencoded({ extended: false })); // it owrks for forms as jsonc
		this.app.use(express.json());


	}

	routes() {
		this.app.use(IndexRoutes);
		this.app.use('/posts', PostRoutes);
	}

	async listen() {
		await this.app.listen(this.app.get('port'));
		console.log(`Server on port ${this.port}`);
	}
}