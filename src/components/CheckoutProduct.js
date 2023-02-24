import { StarIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";


export default function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime
}) {

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category, 
      image,
      hasPrime
    };

    //add the product into the redux store inside the basket container
    dispatch(addToBasket(product))
  };

  const removeItemFromBasket = () => {


    //remove the product from the basket container
    dispatch(removeFromBasket(id))
  }

  return (
    <div className="grid grid-cols-5">
      <Image 
        alt=""
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />

      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon 
              key={i}
              className="h-5 text-yellow-500"
            />
          ))}
        </div>
        <Currency quantity={price} />
        <p className="text-xs my-2 line-clamp-3">{description}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img 
              alt="" 
              src="https://links.papareact.com/fdw" 
              className="w-12"  
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">Add to Basket</button>
        <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
      </div>
    </div>
  )
}