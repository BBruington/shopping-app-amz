import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header component */}

      <Header />

      {/* Main area */}

      <main className="max-w-screen-2xl mx-auto">

        {/* Banner */}

        <Banner />

        {/* ProductFeed */}

        {products && (<ProductFeed products={products} />)}

      </main>

    </div>
  );
}

export async function getServerSideProps() {
  
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return {
    props: {
      products,
    },
  }
}

// https://fakestoreapi.com/products