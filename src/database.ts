import { createPool } from 'mysql2/promise';

export async function connect(): Promise<any> {
	const connection = await createPool({
		host: '127.0.0.1',
		port: 3306,
		user: 'root',
		password: 'mendomysql',
		database: 'mendozarq',
		connectionLimit: 10

	});
	return connection;
}

