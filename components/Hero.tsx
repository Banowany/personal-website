import Image from "next/image"

export default function Hero() {
    return (
        <section className="text-center">
            <div>
                <Image src={"/avatar.png"} alt="avatar icon" width={150} height={150}/>
            </div>
            <h1>{"Hi, I'm Krzysztof"}</h1>
            <p>A developer combining programming skills with an infrastructure perspective</p>
        </section>
    )
}