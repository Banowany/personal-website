import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-32 h-32">
      <Image src={"/logo.svg"} alt="Moje logo" fill/>
    </div>
  )
}