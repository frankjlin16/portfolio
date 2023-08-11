import Navlink from "./navlink";

export default function Navbar() {
  return (
    <nav className="flex gap-10">
      <Navlink href="#" text="Project" />
      <Navlink href="#" text="Contact" />
    </nav>
  );
}
