import { Schema, model } from "mongoose";


const productSchema = new Schema(

{
    productId:{
        type:String,
        required:true,
        unique:true
    },


    productTitle:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },


    color:{
        type:String,
        required:true,
    },


    sku:{
        type:String,
        required:true,
        unique:true
    },


    brandId:{
        type:Schema.Types.ObjectId,
        required:true
    },


    categoryId:{
        type:Schema.Types.ObjectId,
        required:true
    },


    warrantyPeriod:{
        type:Number,
        required:true
    },


    warrantyUnit:{
        type:String,
        enum:[
            "DAYS",
            "MONTHS",
            "YEARS"
        ],
        default:"DAYS"
    },


    status:{
        type:String,
        enum:[
            "ACTIVE",
            "INACTIVE"
        ],
        default:"ACTIVE"
    },


    approvalStatus:{
        type:String,
        enum:[
            "PENDING",
            "APPROVED",
            "REJECTED"
        ],
        default:"PENDING"
    },


    createdBy:{
        type:String,
        required:true
    },


    approvedBy:{
        type:String,
        default:null
    },


    approvedAt:{
        type:Date,
        default:null
    },


    rejectionReason:{
        type:String,
        default:null
    }


},

{
    timestamps:true
}


);


export const Product = model(
    "Product",
    productSchema
);