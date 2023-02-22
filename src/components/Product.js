import Image from "next/legacy/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";


export default function Product({id, title, price, description, category, image}) {
  const [hasPrime] = useState(
    Math.random() < 0.5
  )

  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" alt={title} />

      <h4>{title}</h4>

      <div className="flex">

        <StarIcon className="h-5"></StarIcon>
        <StarIcon className="h-5"></StarIcon>
        <StarIcon className="h-5"></StarIcon>

      </div>

      <p>{description}</p>

      <Currency quantity={price}></Currency>

    </div>
  )
}