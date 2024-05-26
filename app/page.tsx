import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import MainSection from "./Home/MainSection";

export default function Home() {
  return <>
  <main className=" bg-main relative ">
    <Navbar/>
    <MainSection/>
  </main>
  </>
   
}
