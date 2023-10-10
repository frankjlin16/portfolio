import Navlink from "./navlink";

export default function Navbar() {
  return (
    <nav className="flex gap-10">
      <Navlink href="#projects" text="Project" />
      <Navlink href="#contact" text="Contact" />
    </nav>
  );
}
