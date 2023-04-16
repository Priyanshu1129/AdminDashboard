import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter the product name"],
        trim: true
    },
    price:{
        type:Number,
        required:[true, "Please enter the product price"],
    },
    description:{
        type:String,
        required:[true, "Please enter the product description"],
    },
    category:{
        type:String,
        required:[true, "Please enter product category"]
    },
    rating:{
        type:Number,
        default: 0
    },
    supply:{
        type:Number,
        required:true,
    }
},
    { timestamps: true}
)

const Product = mongoose.model('Product', ProductSchema)

export default Product 