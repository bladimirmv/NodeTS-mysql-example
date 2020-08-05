import { post } from './../interfaces/post.interface';

import e, { Request, Response } from "express";
import { connect } from "./../database";


export async function getPosts(req: Request, res: Response): Promise<Response> {
	const conn = await connect();
	const posts = await conn.query('select  * from posts;');
	return res.json(posts[0]);
}

export async function createPost(req: Request, res: Response) {
	try {
		const newPost: post = req.body;
		const conn = await connect();
		await conn.query('INSERT INTO posts SET ?', [newPost]);
		return res.json({
			message: 'post created'
		});
	} catch (err) {
		return res.json({
			message: err
		});
	}
}

export async function getPost(req: Request, res: Response): Promise<Response> {

	const id = req.params.id;
	const conn = await connect();

	const post = await conn.query('select  * from posts where id = ?', [id]);
	return res.json(post[0]);

}

export async function deletePost(req: Request, res: Response) {

	const id = req.params.id;
	const conn = await connect();

	await conn.query('DELETE from posts where id = ?', [id]);
	return res.json({
		message: 'post deleted'
	});
}

export async function updatePost(req: Request, res: Response) {

	const id = req.params.id;
	const conn = await connect();
	const data: post = req.body;
	await conn.query('update posts set ? where id = ?', [data, id]);
	return res.json({
		message: 'post updated'
	});
}