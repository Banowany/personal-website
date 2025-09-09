import Header from "@/components/Header";
import Hero from "@/components/Hero";

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