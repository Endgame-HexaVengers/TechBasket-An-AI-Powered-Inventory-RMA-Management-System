export type ApprovalStatus = 'Pending' | 'Approved' | 'Rejected';
export type ProductStatus = 'Active' | 'Inactive' | 'Draft';

export interface ProductApprovalItem {
  id: string;
  productTitle: string;
  sku: string;
  brand: string;
  category: string;
  submittedBy: string;
  date: string;
  status: ApprovalStatus;
  image?: string;
}

export interface ProductItem {
  id: string;
  productTitle: string;
  sku: string;
  brand: string;
  category: string;
  color: string;
  warranty: string;
  status: ProductStatus;
  image?: string;
}
