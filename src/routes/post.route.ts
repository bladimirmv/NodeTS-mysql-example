import { post } from './../interfaces/post.interface';
import { Router } from "express";
const router = Router();

import { getPosts, createPost, getPost, deletePost, updatePost } from "./../controllers/post.controller";

import multer from 'multer';
// const storage = multer.diskStorage({
// 	destination: (req, file, callback) => {
// 		callback(null, )
// 	}
// })

const upload = multer().single('file');

router.route('/')
	.get(getPosts)
	.post(upload, createPost);


router.route('/:id')
	.get(getPost)
	.delete(deletePost)
	.put(updatePost);

export default router;