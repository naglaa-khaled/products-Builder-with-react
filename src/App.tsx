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
  const [selectedCatigory, setSelectedCatigory] = useState<ICatigory>(
    catigories[0]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgUrl: "",
    price: "",
  });
  const [tempColor, setTempColor] = useState<string[]>([]);
  console.log(tempColor);

  /*--------------------------handler-------------------*/

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
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
  }
  const oncancel = () => {
    console.log("cancel");
    setProduct(defaultproductObj);
    close();
  };
  /*--------------------------renders-------------------*/
  const rendersProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
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
  const renderProductColors = Colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => {
          return [...prev, color];
        });
      }}
    />
  ));

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
      <MyModal isOpen={isOpen} close={close} title="EDIT PRODUCT">
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
    </main>
  );
};
export default App;
