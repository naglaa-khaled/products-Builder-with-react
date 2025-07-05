import ProductCard from "./components/productCard";
import { ProductList } from "./data";

const App = () => {
  //renders
  const rendersProductList = ProductList.map(product => <ProductCard key={product.id} product={product}/>);
  return (
    <main className="container mx-auto">
      <div className="m-5  rounded-md   grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4 p-2">
        {rendersProductList}
      </div>
    </main>
  );
};
export default App;

