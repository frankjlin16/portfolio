import Link from "next/link";

interface NavlinkProps {
  href: string;
  text: string;
}

export default function Navlink({ href, text }: NavlinkProps) {
  return (
    <div className="group">
      <Link
        href={href}
        className="text-xl text-primary font-bold"
      >
        {text}
      </Link>
      <div className="h-[3px] w-5 group-hover:w-full bg-primary"></div>
    </div>
  );
}
