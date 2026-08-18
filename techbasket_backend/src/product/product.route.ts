import express from "express";

import { productController } 
from "./product.controller";


const router = express.Router();



router.post(
    "api/v1/addProduct",
    productController.createProduct
);



router.get(
    "/",
    productController.getProducts
);



router.get(
    "/:productId",
    productController.getSingleProduct
);



router.patch(
    "/:productId/approve",
    productController.approveProduct
);



router.patch(
    "/:productId/reject",
    productController.rejectProduct
);



export default router;