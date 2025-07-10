import ProductCard from "./components/productCard";
import { ProductList, formInputList } from "./data";
import MyModal from "./components/ui/Model";
import Input from "./components/ui/input";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react";
import Button from "./components/ui/Button";
import type { IProduct } from "./components/interfaces";
import { productValidation } from "./validation/index";
import ErrorMessage from "./components/ErrorMessage";

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
  const [product, setProduct] = useState<IProduct>(defaultproductObj);

  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgUrl: "",
    price: "",
  });

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
    console.log("has sent");
  }
  const oncancel = () => {
    console.log("cancel");
    setProduct(defaultproductObj);
    close();
  };
  /*--------------------------renders-------------------*/
  const rendersProductList = ProductList.map((product) => (
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
      <ErrorMessage msg={ errors[input.name]} />
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 w-full"
        onClick={open}
      >
        ADD
      </Button>
      <div className="m-5  rounded-md   grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4 p-2">
        {rendersProductList}
      </div>
      <MyModal isOpen={isOpen} close={close} title="EDIT PRODUCT">
        <form className="space-y-3" onSubmit={submitHandelar}>
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 ">Submit</Button>
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
