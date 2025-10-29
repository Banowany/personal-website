import Image from "next/image"

export default function Hero() {
    return (
        <section
            className="py-3 py-md-5" 
            style={{
                minHeight: '100vh',
                backgroundColor: 'white'
            }}
        >
            <div className="text-center container">
                <div>
                    <Image src={"/avatar.png"} alt="avatar icon" width={150} height={150}/>
                </div>
                <h1 className="display-4 display-md-3 display-lg-2">
                    {"Hi, I'm Krzysztof"}
                </h1>
                <p className="fs-6 fs-md-5">
                    A developer combining programming skills with an infrastructure perspective
                </p>
            </div>
        </section>
    )
}