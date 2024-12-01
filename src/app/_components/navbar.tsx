import Link from "next/link";
import Button from "./button";

export default function NavBar() {
    return (
        <nav className="w-full flex flex-row p-5 lg:px-10 z-99">
            <div className="font-[family-name:var(--font-montserrat)]">
                <h1 className="text-lg font-semibold uppercase">Giro Calvario</h1>
            </div>
            <ul className="flex flex-row items-center ml-auto">
                <li className="hidden lg:inline-block mr-5">
                    <Button type="nav">
                        <Link href="/">about</Link>
                    </Button>
                </li>
                <li className="hidden lg:inline-block mr-5">
                    <Button type="nav">
                        <Link href="/">experience</Link>
                    </Button>
                </li>
                <li className="hidden lg:inline-block mr-5">
                    <Button type="nav">
                        <Link href="/">education</Link>
                    </Button>
                </li>
                <li className="">
                    <Button type="nav">
                        <Link href="/">hire me</Link>
                    </Button>
                </li>
            </ul>
        </nav>
    )
} 