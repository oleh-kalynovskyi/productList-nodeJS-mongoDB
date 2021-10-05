import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const {imageUrl, ProductName, Count, Width, Height, Weight, Comments} = req.body
            const post = await Post.create({imageUrl, ProductName, Count, Width,  Weight, Height, Comments});
            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'ID is not found'})
            }
            const post = await Post.findById(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e.message) 
        }
    }
    async upDate(req, res) {
        try {
            const post = req.body
            if(!post._id){
                res.status(400).json({message: 'ID is not found'})
            }
            const upDeatePost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return res.json(upDeatePost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'ID is not found'})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();