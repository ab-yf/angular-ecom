export interface Category {
    id: number;
    category: string;
    // optional field
    parent_category_id?: number;
}