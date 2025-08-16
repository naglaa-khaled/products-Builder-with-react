export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imgUrl: string;
  price: string;
  colors: string[];
  category: {
    
    name: string;
    imgUrl: string;
  };
}
export interface IFormInput {
  id: string;
  name: "title" | "description" | "imgUrl" | "price";
  label: string;
  type: string;
}
export interface ICatigory {
  id: string;
  name: string;
  imgUrl: string;
}
