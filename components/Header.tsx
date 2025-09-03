import Image from "next/image"

export default function Header() {
    return (
        <header className="h-20 px-8 flex flex-row justify-between shadow-lg">
            {/* this image size need to change if i changed height of header 36:11*/}
            <Image src={"/logo.svg"} alt="Moje logo" width={48*36/11} height={48}/>
            <div>
                others links
            </div>
        </header>
    )
}