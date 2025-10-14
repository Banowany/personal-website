import Image from "next/image"

export default function Hero() {
    return (
        <section>
            <div>
                <div>
                    <h1>{"Hi, I'm Krzysztof"}</h1>
                    <p>A developer combining programming skills with an infrastructure perspective</p>
                </div>
                <div>
                    <Image src={"/avatar.png"} alt="avatar icon" width={300} height={300}/>
                </div>
            </div>
        </section>
    )
}