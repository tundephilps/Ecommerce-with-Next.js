import { Product } from "@/Types";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Productx from "@/components/Productx";

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {
  return (
    <>
      <div className=" bg-blue-100">
        <Banner />
      </div>
      <div className="flex items-center justify-center bg-blue-200">
        <Products productData={productData} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();

  return {
    props: { productData },
  };
};

//https://api.npoint.io/04c9b96c9ad1ef94b2f5
