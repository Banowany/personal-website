import Image from "next/image"

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className=" navbar-brand" href="#">
                    <img src={"/logo.svg"} height={24}></img>
                </a>
            </div>
        </nav>
    )
}