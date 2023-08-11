import Link from "next/link";
import Navlink from "./navlink";

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <Navlink href="/" text="Project" />
      <Navlink href="/about" text="Contact" />
    </nav>
  );
}
