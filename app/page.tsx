import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className=" flex flex-col items-center text-gray-800 bg-white">
      {/* <Header/> */}
      <Hero/>
      <AboutMe/>
    </main>
  )
}