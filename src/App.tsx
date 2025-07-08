import ProductCard from "./components/productCard";
import { ProductList, formInputList } from "./data";
import MyModal from "./components/ui/Model";
import Input from "./components/ui/input"
import { useState } from "react";
import Button from "./components/ui/Button";

const App = () => {
  /*--------------------------state-------------------*/

  const [isOpen, setIsOpen] = useState(false);

  /*--------------------------handler-------------------*/

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  /*--------------------------renders-------------------*/
  const rendersProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id}>{input.label}</label>
      <Input type="text" name={input.name} id={input.id} />
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
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 ">Cancel</Button>
            <Button className="bg-gray-400 hover:bg-gray-500 ">Submit</Button>
          </div>
        </form>
      </MyModal>
    </main>
  );
};
export default App;
