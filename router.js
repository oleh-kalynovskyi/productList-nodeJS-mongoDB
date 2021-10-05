import Router from "express";
import PostController from './postController.js';
import cors from 'cors'

const router = new Router()

router.post('/posts', cors(), PostController.create )
router.get('/posts', cors(), PostController.getAll)
router.get('/posts/:id', cors(), PostController.getOne)
router.put('/posts', cors(), PostController.upDate)
router.delete('/posts/:id', cors(), PostController.delete)

export default router;