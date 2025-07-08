import ProductCard from "./components/productCard";
import { ProductList } from "./data";
import MyModal from "./components/ui/Model";
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
  return (
    <main className="container mx-auto">
      <div className="m-5  rounded-md   grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4 p-2">
        {rendersProductList}
      </div>
      <MyModal isOpen={isOpen} close={close} title="EDIT PRODUCT">
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 " width="w-full">
            Cancel
          </Button>
          <Button className="bg-amber-300 " width="w-full">
            Submit
          </Button>
        </div>
      </MyModal>
    </main>
  );
};
export default App;
