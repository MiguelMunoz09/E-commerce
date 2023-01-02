import ProductList from "../containers/ProductList";
import Head from "next/head";


export default function Home() {
  return (
   <>
   <Head> 
    <title>E-commerce Next</title>
   </Head>
      <ProductList/>
   </>
  );
}
