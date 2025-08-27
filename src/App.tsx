import ProductCard from "./components/productCard";
import { Colors, ProductList, catigories, formInputList } from "./data";
import MyModal from "./components/ui/Model";
import Input from "./components/ui/input";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react";
import Button from "./components/ui/Button";
import type { IProduct, ICatigory } from "./components/interfaces";
import { productValidation } from "./validation/index";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import { Example } from "./components/ui/Select";
import type { TproductName } from "./types";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const defaultproductObj = {
    title: "",
    description: "",
    imgUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imgUrl: "",
    },
  };
  /*--------------------------state-------------------*/
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState<IProduct>(defaultproductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultproductObj);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [selectedCatigory, setSelectedCatigory] = useState<ICatigory>(
    catigories[0]
  );

  console.log(productToEditIndex);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModel, setOpenEditModel] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgUrl: "",
    price: "",
  });
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  /*--------------------------handler-------------------*/

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function openEditModel() {
    setOpenEditModel(true);
  }

  function closeEditModel() {
    setOpenEditModel(false);
  }
  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);
  const onChangeProduct = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  function submitHandelar(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, price, imgUrl } = product;
    const error = productValidation({ title, description, price, imgUrl });

    // check if any property has a value of "" && check if all properities have avalue of ""
    const hasErrorMg =
      Object.values(error).some((value) => value === "") &&
      Object.values(error).every((value) => value === "");
    console.log(hasErrorMg);
    console.log(error);
    if (!hasErrorMg) {
      setErrors(error);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColor, category: selectedCatigory },
      ...prev,
    ]);
    setProduct(defaultproductObj);
    setTempColor([]);
    close();
    toast("Product has been added successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
  }

  function submitEditHandelar(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, price, imgUrl } = productToEdit;
    const error = productValidation({ title, description, price, imgUrl });

    // check if any property has a value of "" && check if all properities have avalue of ""
    const hasErrorMg =
      Object.values(error).some((value) => value === "") &&
      Object.values(error).every((value) => value === "");

    if (!hasErrorMg) {
      setErrors(error);
      return;
    }
    const updateProducts = [...products];
    updateProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempColor.concat(productToEdit.colors),
    };
    setProducts(updateProducts);
    // setProducts((prev) => [
    //   { ...product, id: uuid(), colors: tempColor, category: selectedCatigory },
    //   ...prev,
    // ]);
    setProductToEdit(defaultproductObj);
    setTempColor([]);
    closeEditModel();
    toast("Product has been Edit successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
  }
  const oncancel = () => {
    
    setProduct(defaultproductObj);
    closeEditModel();
  };

  /*--------------------------renders-------------------*/
  const rendersProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModel={openEditModel}
      idx={idx}
      setProductToEditIndex={setProductToEditIndex}
      openConfirmModal={openConfirmModal}
    />
  ));
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type="text"
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeProduct}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductsToEdit = (
    id: string,
    label: string,
    name: TproductName
  ) => {
    return (
      <div className="flex flex-col " key={id}>
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          name={name}
          id={id}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };
  const renderProductColors = Colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => {
          return [...prev, color];
        });
      }}
    />
  ));
  const removeProductHandler = () => {
    const filtered = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been deleted successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#c2344d",
        color: "white",
      },
    });
  };

  return (
    <main className="container mx-auto">
      <div className="flex justify-center mt-3 mb-3">
        <button
          className="bg-indigo-700 hover:bg-indigo-800 p-3 w-60 rounded-lg text-white cursor-pointer"
          onClick={open}
        >
          Build Product
        </button>
      </div>

      <div className="m-5  rounded-md   grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4 p-2">
        {rendersProductList}
      </div>
      <MyModal
        isOpen={isOpenEditModel}
        close={closeEditModel}
        title="EDIT THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandelar}>
          {renderProductsToEdit("title", "product Title", "title")}
          {renderProductsToEdit(
            "description",
            "product Description",
            "description"
          )}
          {renderProductsToEdit("imgUrl", " Product Image URL", "imgUrl")}
          {renderProductsToEdit("price", "product price", "price")}
          <Example
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex items-center space-x-1 flex-wrap ">
            {renderProductColors}
          </div>
          <div className="flex items-center space-x-1 flex-wrap ">
            {tempColor.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800 ">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={oncancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </MyModal>

      <MyModal isOpen={isOpen} close={close} title="ADD NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandelar}>
          {renderFormInputList}
          <Example
            selected={selectedCatigory}
            setSelected={setSelectedCatigory}
          />

          <div className="flex items-center space-x-1 flex-wrap ">
            {renderProductColors}
          </div>
          <div className="flex items-center space-x-1 flex-wrap ">
            {tempColor.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800 ">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={oncancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </MyModal>
      {/* DELETE PRODUCT CONFIRM MODAL */}
      <MyModal
        isOpen={isOpenConfirmModal}
        close={closeConfirmModal}
        title="Are you sure you want to remove this Product from your Store?"
        description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
      >
        <div className="flex items-center space-x-3">
          <Button
            className="bg-[#c2344d] hover:bg-red-800"
            onClick={removeProductHandler}
          >
            Yes, remove
          </Button>
          <Button
            type="button"
            className="bg-[#f5f5fa] hover:bg-gray-300 !text-black"
            onClick={closeConfirmModal}
          >
            Cancel
          </Button>
        </div>
      </MyModal>
      <Toaster />
    </main>
  );
};
export default App;
