import Product from "./Product";

export default function ProductFeed({products}) {

  return (
    // grid-flow-row-dense says to make sure to use up empty space for the row
    <div className="grid grid-flow-row-dense md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 md:-mt-44 mx-auto">
      {products && products
      .slice(0,4)
      .map(({id, title, price, description, category, image}) => (
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

      <img 
        className="md:col-span-full" 
        src="https://links.papareact.com/dyz" 
        alt="" 
      />

      <div className="md:col-span-2">
        {products && products
        .slice(4,5)
        .map(({id, title, price, description, category, image}) => (
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

      {products && products
        .slice(5, products.length)
        .map(({id, title, price, description, category, image}) => (
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