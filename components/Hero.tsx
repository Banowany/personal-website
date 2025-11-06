import Image from "next/image"

export default function Hero() {
    return (
        <section className=" h-screen flex flex-col justify-center items-center text-center px-4">
            <div className="text-center container">
                {/* <div>
                    <Image src={"/avatar.png"} alt="avatar icon" width={150} height={150}/>
                </div> */}
                <h1 className=" text-4xl md:text-6xl max-w-2xl mb-5">
                    {"Hi, I'm Krzysztof"}
                </h1>
                <p className=" text-lg md:text-2xl max-w-2xl">
                    A developer combining programming skills with an infrastructure perspective
                </p>
            </div>
        </section>
    )
}