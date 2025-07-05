import Image from "./image";
import type { IProduct } from "./interfaces";
import Button from "./ui/Button";
import {txtSlicer} from "../utiles/function"
interface IProps {
  product:IProduct
}

const productCard = ({ product }: IProps) => {
  const { title, description, imgUrl, price, category } = product;
  return (
    <div className=" w-full md:max-w-lg md:mx-0  border rounded-md p-2 flex  flex-col ">
      <Image
        classname="max-w-full  rounded-md"
        imageUrl={imgUrl}
        alt="product name"
      />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2 ">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer "></span>
        <span className="w-5 h-5 bg-red-600 rounded-full  cursor-pointer"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full  cursor-pointer "></span>
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          classname=" w-10 h-10 rounded-full  object-center "
          imageUrl={category.imgUrl}
          alt="product name"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 " width="w-full">
          EDIT
        </Button>
        <Button
          className="bg-red-700"
          onClick={() => {
            console.log("clicked");
          }}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};
export default productCard;
