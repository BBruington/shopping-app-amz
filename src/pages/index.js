import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Head from "next/head";

export default function Home() {
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

      </main>

    </div>
  );
}
