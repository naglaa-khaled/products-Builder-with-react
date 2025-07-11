import Image from "./image";
import type { IProduct } from "./interfaces";
import Button from "./ui/Button";
import { txtSlicer } from "../utiles/function";
import CircleColor from "./CircleColor";
interface IProps {
  product: IProduct;
}


const productCard = ({ product }: IProps) => {
  const { title, description, imgUrl, price, colors, category } = product;

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
      
      }}
    />
  ));

  return (
<div className="w-full max-w-sm md:max-w-xl mx-auto border border-gray-400 rounded-md p-4 flex flex-col">
 
      <Image
        classname="max-w-full  rounded-md h-72  lg:object-cover"
        imageUrl={imgUrl}
        alt="product name"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center space-x-1 flex-wrap ">
        {renderProductColors}
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
        <Button className="bg-indigo-700 hover:bg-indigo-800 " width="w-full">
          EDIT
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-800"
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
