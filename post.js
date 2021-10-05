import mongoose from "mongoose";

const Post = new mongoose.Schema({
    imageUrl:  {type: String },
    ProductName:  {type: String },
    Count:  {type: Number },

    Width:  {type: Number, },
    Height:  {type: Number, },

    Weight:  {type: Number, },
    Comment:  {type: Array }
})

export default mongoose.model('Post', Post)