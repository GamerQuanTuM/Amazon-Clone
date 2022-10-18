import Head from "next/head";
import components from "../components/index";
import axios from "axios";

const { Header, Banner, ProductFeed } = components;

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Amazon Clone</title>
      </Head>
      <Header  />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  return {
    props: {
      products: data,
    },
  };
}
