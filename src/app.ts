import express, { Application } from 'express';
import morgan from 'morgan';

import IndexRoutes from './routes/index.route';
import PostRoutes from './routes/post.route';

import cors from "cors";
// import bodyParser 'body-parser';

export class App {
	private app: Application;

	constructor(private port?: number | string) {
		this.app = express();


		this.settings();
		this.middlewares();
		this.routes();
	}

	private settings(): void {
		this.app.set('port', this.port || process.env.PORT || 3000);
	}

	middlewares(): void {
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

	}

	routes(): void {
		this.app.use(IndexRoutes);
		this.app.use('/posts', PostRoutes);
	}

	async listen() {
		await this.app.listen(this.app.get('port'));
		console.log(`Server on port ${this.port}`);
	}
}