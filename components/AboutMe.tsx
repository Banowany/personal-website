export default function AboutMe() {
    return (
        <section className=" w-full bg-gray-50 py-20">
            <div className=" min-h-screen max-w-4xl mx-auto px-6 flex flex-col justify-center itmes-center text-center">
                <h2 className=" text-3xl md:text-5xl font-semibold mb-10">About Me</h2>
                <div className=" text-base md:text-lg leading-relaxed space-y-4 text-justify">
                    <p>
                        I am a fifth-year Computer Science student at Jagiellonian University.
                        I have been fascinated by computers since childhood — I do not just want to use them, I want to understand how and why they work.
                    </p>


                    <p>
                        These days, I feel most at home in web development, especially on the backend, though I can handle frontend work as well. I have spent the most time working with Java and C#, but I am also comfortable with Python.
                    </p>


                    <p>
                        Recently, I have been exploring system administration and computer networks — that is why I set up my own server, bought a domain, and launched this website.
                    </p>


                    <p>
                        Curiosity drives me in everything I do. It is not enough for me to know that something works — I want to understand why. I am interested not only in building applications, but also in their deployment, infrastructure, and the processes that make them reliable and accessible.
                    </p>
                </div>
            </div>
        </section>
    )
}