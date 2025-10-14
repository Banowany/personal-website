import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Hero/>
        {/* <AboutMe/> */}
      </div>
    </div>
  )
}