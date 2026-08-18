import { Product } from "./product.model";
import { IProduct } from "./product.types";



// Create Product

const createProduct = async(
    payload:IProduct
)=>{

    const product =
        await Product.create(payload);


    return product;

};



// Get All Products

const getAllProducts = async()=>{


    const products =
        await Product.find();


    return products;

};



// Get Single Product

const getSingleProduct = async(
    productId:string
)=>{


    const product =
        await Product.findOne({
            productId
        });


    return product;

};



// Update Product

const updateProduct = async(

    productId:string,

    payload:Partial<IProduct>

)=>{


    const product =
        await Product.findOneAndUpdate(

            {
                productId
            },

            payload,

            {
                new:true
            }

        );


    return product;

};



// Approve Product

const approveProduct = async(

    productId:string,

    adminId:string

)=>{


    const product =
    await Product.findOneAndUpdate(

        {
            productId
        },

        {

            approvalStatus:"APPROVED",

            approvedBy:adminId,

            approvedAt:new Date()

        },

        {
            new:true
        }

    );


    return product;

};



// Reject Product

const rejectProduct = async(

    productId:string,

    reason:string

)=>{


    const product =
    await Product.findOneAndUpdate(

        {
            productId
        },

        {

            approvalStatus:"REJECTED",

            rejectionReason:reason

        },

        {
            new:true
        }

    );


    return product;

};



export const productService = {


    createProduct,

    getAllProducts,

    getSingleProduct,

    updateProduct,

    approveProduct,

    rejectProduct

};