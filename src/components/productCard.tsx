import Image from "./image";
import type { IProduct } from "./interfaces";
import Button from "./ui/Button";
import { txtSlicer } from "../utiles/function";
import CircleColor from "./CircleColor";
interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModel: () => void;
  setProductToEditIndex: (value: number) => void;
  idx: number;
  openConfirmModal: () => void;
}


const productCard = ({
  product,
  setProductToEdit,
  openEditModel,
  setProductToEditIndex,
  idx,
  openConfirmModal
}: IProps) => {
  const { title, description, imgUrl, price, colors, category } = product;
  // Renders
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} onClick={() => {}} />
  ));
  // Handler
  const onEdit = () => {
    setProductToEdit(product);
    openEditModel();
    setProductToEditIndex(idx);
  };
  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };
  return (
    <div className="w-full max-w-sm md:max-w-xl mx-auto border border-gray-400 rounded-md p-4 flex flex-col">
      <Image
        classname="max-w-full  rounded-md h-72  lg:object-cover "
        imageUrl={imgUrl}
        alt="product name"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center space-x-1 flex-wrap mt-3 ">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          classname=" w-10 h-10 rounded-full  object-center "
          imageUrl={category.imgUrl}
          alt={category.name}
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800 "
          width="w-full"
          onClick={onEdit}
        >
          EDIT
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-800"
          onClick={onRemove}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};
export default productCard;
