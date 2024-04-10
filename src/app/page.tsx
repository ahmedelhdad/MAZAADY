'use client'
import Navbar from "../components/Navbar";
import Profile from "@/components/Profile";
import Products from "@/components/Products";
export default function Home() {
  return (
    <div className=" container mx-auto h-[100vh]">
        <Navbar/>
        <div className="flex flex-col lg:flex-row  my-1 py-10 px-5  lg:px-20  lg:space-x-12 ">
          <Profile/>
          <Products/>
        </div>
    </div>
  );
}
