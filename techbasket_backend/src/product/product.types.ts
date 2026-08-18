export interface IProduct {

    productId: string;

    productTitle: string;

    color?: string;

    sku: string;


    brandId: string;

    categoryId: string;


    warrantyPeriod: number;

    warrantyUnit: 
        "DAYS" | 
        "MONTHS" | 
        "YEARS";


    status:
        "ACTIVE" |
        "INACTIVE";


    approvalStatus:
        "PENDING" |
        "APPROVED" |
        "REJECTED";


    createdBy: string;


    approvedBy?: string | null;

    approvedAt?: Date | null;

    rejectionReason?: string | null;


    createdAt?: Date;

    updatedAt?: Date;

}