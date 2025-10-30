export default function AboutMe() {
    return (
        <section 
            className="py-3 py-md-5"
            style={{
                minHeight: '100vh',
                backgroundColor: '#e9ecef',
                color: 'black'
            }}
        >
            <div className="text-center container">
                <h2 className="mb-3">About Me</h2>
                
                <p className="fs-6 fs-md-5">
                I am a fifth-year Computer Science student at Jagiellonian University.
                I have been fascinated by computers since childhood — I do not just want to use them, I want to understand how and why they work.
                </p>


                <p className="fs-6 fs-md-5">
                These days, I feel most at home in web development, especially on the backend, though I can handle frontend work as well. I have spent the most time working with Java and C#, but I am also comfortable with Python.
                </p>


                <p className="fs-6 fs-md-5">
                Recently, I have been exploring system administration and computer networks — that is why I set up my own server, bought a domain, and launched this website.
                </p>


                <p className="fs-6 fs-md-5">
                Curiosity drives me in everything I do. It is not enough for me to know that something works — I want to understand why. I am interested not only in building applications, but also in their deployment, infrastructure, and the processes that make them reliable and accessible.
                </p>
            </div>
        </section>
    )
}