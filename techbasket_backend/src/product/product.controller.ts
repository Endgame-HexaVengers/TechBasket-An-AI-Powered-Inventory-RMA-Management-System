import { Request, Response } from "express";
import { productService } from "./product.service";


const createProduct = async(
    req:Request,
    res:Response
)=>{

    const result =
    await productService.createProduct(
        req.body
    );


    res.status(201).json({
        success:true,
        message:"Product created",
        data:result
    });

};



const getProducts = async(
    req:Request,
    res:Response
)=>{

    const result =
    await productService.getAllProducts();


    res.status(200).json({
        success:true,
        data:result
    });

};



export const productController={
    createProduct,
    getProducts
};