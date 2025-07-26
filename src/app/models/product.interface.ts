export interface Iproduct {
    _id: string;
    title: string;
    product_description: string[];
    rating: number;
    reviews_count: number;
    images: string[];
    tags: string[];
    product_details: string | null;
    return_policy: null | string;
    total_price: string;
    product_specifications: Array<Ispecify>
    category: string;
    subcategory: string;
} 

export interface Ispecify{
    _id : string
    specification_name : string
    specification_value : string
}