export interface IProduct{
  id?: string | undefined;
  title: string;
  description: string;
  imgUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string,
    imgUrl:string
  }
}