import Image from "next/image"

export default function Header() {
    return (
        <header className="h-20 px-8 flex flex-row justify-between">
            {/* this image size need to change if i changed height of header */}
            <Image src={"/logo.svg"} alt="Moje logo" width={120} height={80}/>
            <div>
                others links
            </div>
        </header>
    )
}