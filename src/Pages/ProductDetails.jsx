import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductData } from "../Components/ProductData";
import { useNavigate } from "react-router-dom";
import { useAllContext } from "../Context/AllContext";


const ProductDetails = () => {
  const { getProductCountById }= useAllContext()
  const Back = useNavigate();
  const [fullDetails, setFullDetails] = useState({});
  const { tag } = useParams();


  useEffect(() => {
    const display = ProductData.find((data) => data.tag === tag);
    if (display) {
      setFullDetails(display);
    }
  }, [tag]);
  const productCount = getProductCountById(fullDetails.id);
  const deliveryFee = 15.00
  const totalPrice = parseFloat((parseFloat(fullDetails.price) * productCount).toFixed(2));
  let finalPrice = totalPrice + deliveryFee
  return (
    <div className="bg-[#f4edea] pt-4 pl-2">
      <button
        className=" w-36 sm:w-38 flex justify-center items-center gap-2 px-2 py-1 rounded-full bg-[#c7390e] text-[#f4edea]"
        onClick={() => Back('/')}
      >
        BACK
      </button>

      <div className="font-redhat flex flex-col items-start sm:items-center justify-center gap-16 font-medium bg-[#f4edea] px-1 sm:px-0">
            <img
            src={fullDetails.image}
            srcSet={`${fullDetails.imageMobile} 640w, ${fullDetails.imageTab} 900w, ${fullDetails.image} 1204w`}
            alt="Product"
            className=" rounded-xl w-96 sm:w-1/4 mt-10"
            />
            <div className="flex flex-col items-start justify-center gap-20 leading-10 text-[#250e08] w-82 sm:w-3/4  my-10">
                <div className="  w-82 flex flex-col gap-3">
                        <p className="text-4xl font-extrabold text-[#c7390e]">
                        {fullDetails.tag}
                        </p>
                        <p>
                        <span className="font-normal">Description :</span>{" "}
                        {fullDetails.description}
                        </p>
                        <p className="leading-normal font-normal ">{fullDetails.details}</p>
                        <div className="flex gap-12 items-center justify-start sm:justify-center">
                            <p className="text-[#c7390e] font-bold text-lg"> Unit Price : $
                            {parseFloat(fullDetails.price).toFixed(2)}
                            </p>
                            <p className=" font-bold">
                            Order Quantity : {productCount}
                            </p>
                        </div>
                        <div className="leading-6">
                           <p className="text-[#c7390e] font-bold text-lg">Price Total : ${totalPrice.toFixed(2)}</p>
                        <p>Delivery Fee:${deliveryFee.toFixed(2)}</p>
                        <p className="text-4xl font-extrabold text-[#c7390e]"><span className="text-xl">Total Fee: </span><br/>{productCount == "" ? '' : `$${finalPrice.toFixed(2)}`}</p>
                        </div>
                       
                </div>
                <div className="w-full w-82 leading-7">
                        <p>
                        <span className="font-normal">Vendor Name : </span>
                        {fullDetails.vendorName}
                        </p>
                        <p>
                        <span className="font-normal">Vendor Address : </span>
                        {fullDetails.vendorAddress}
                        </p>
                        <p>
                        <span className="font-normal">Phone No : </span>
                        {fullDetails.phoneNo}
                        </p>
                </div>
            </div>
      </div>
    </div>
  );
};
export default ProductDetails;
