import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-100">
        <Banner />
      </div>
    </>
  );
}
