import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Hero/>
      </div>
    </div>
  )
}