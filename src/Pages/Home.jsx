import {  useAllContext } from "../Context/AllContext";
import AddToCart from "../Components/AddToCart";
import { Link } from "react-router-dom";
import EmptyCartImage from "/src/assets/images/illustration-empty-cart.svg";
const Home = () => {
  const {Products, setProducts} = useAllContext()

  const MinusProduct =(id)=>{
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.productCount > 0 ? { ...product, productCount: product.productCount - 1 } : product
      )
    );
  } 
  const AddProduct =(id)=> {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, productCount: product.productCount + 1 } : product
      )
    );
  }
  return (
    <div className="bg-[#f4edea] font-redhat">
      <section className="flex-col sm:flex-col md:flex-col lg:flex-row  flex align-center items-center sm:items-center md:items-center lg:items-start font-redhat-400 px-5 sm:px-4 py-8 sm:py-10 gap-4 sm:gap-8 ">
        <div>
          <p className="text-4xl mb-8 text-[#250e08] font-black">Desserts</p>
          <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-7 ">
            {Products.map(
              ({
                id,
                image,
                imageMobile,
                imageTab,
                button,
                tag,
                description,
                price,
                productCount
              }) => (
                <div key={id} className="relative">
                  <img
                    src={imageMobile}
                    srcSet={`${imageMobile} 800w, ${imageTab} 900w, ${image} 1204w`}
                    alt="productPicture"
                    className="w-full sm:w-80 rounded-lg"
                  />
                  <Link to = {`/${tag}`}>
                  <button className=" w-36 sm:w-38 flex justify-center items-center gap-2 px-2 py-1 border border-[#998a91] rounded-full absolute left-24 sm:left-12 lg:left-20 bottom-28 bg-white text-base sm:text-base md:text-lg lg:text-base text-[#250e08] font-medium">
                    {<AddToCart />}
                    {button}
                  </button></Link>
                  <p className="mt-7 text-[#c9aea5] font-medium ">{tag}</p>
                  <p className="text-[#250e08] font-bold">{description}</p>
                  <p className="text-[#c7390e] font-medium">
                    ${price.toFixed(2)}
                  </p>
                  <div className=" w-24 px-2 flex items-center justify-center gap-5 border rounded-md bg-[#c7390e] text-[#f4edea]" >
                  <p onClick={()=>MinusProduct(id)} className="cursor-pointer font-bold">-</p>
                  <p>{productCount}</p>
                  <p onClick={()=>AddProduct(id)} className="cursor-pointer font-bold">+</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full sm:w-2/6 h-72 p-4 mt-4 sm:mt-0 bg-[#fcf9f7] rounded-lg">
          <p className="text-[#c7390e] font-bold">Your Cart(0)</p>
          <div className="flex flex-col justify-center items-center h-60">
            <img src={EmptyCartImage} alt="emptyCart" />
            <p className="text-[#d1b8a1] font-medium">
              Your added items will appear here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
