import { post } from './../interfaces/post.interface';
import { Router } from "express";
const router = Router();

import { getPosts, createPost, getPost, deletePost, updatePost } from "./../controllers/post.controller";


import multer from 'multer';
const upload = multer();

router.route('/')
	.get(getPosts)
	.post(upload.single('file'), createPost);


router.route('/:id')
	.get(getPost)
	.delete(deletePost)
	.put(updatePost);

export default router;