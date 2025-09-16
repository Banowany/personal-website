import Image from "next/image"

export default function Hero() {
    return (
        <section className="grow flex justify-center items-center">
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl mb-4">{"Hi, I'm Krzysztof"}</h1>
                    <p className="text-xl">A developer combining programming skills with an infrastructure perspective</p>
                </div>
                <div>
                    <Image src={"/avatar.png"} alt="avatar icon" width={300} height={300}/>
                </div>
            </div>
        </section>
    )
}