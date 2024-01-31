
// This file defines our Products List Interface
// Acts as a template for the details of our Products 

export interface Product {
    id: number;
    product_name: string;
    product_img: string;
    price: number;
    // ratings also added.
    ratings: number;
    product_description: string;
    category_id: number;
}