import Product from "./Product";

export default function ProductFeed({products}) {

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 md:-mt-44 mx-auto">
      {products && products.map(({id, title, price, description, category, image}) => (
        <Product 
          key={id} 
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  )
}