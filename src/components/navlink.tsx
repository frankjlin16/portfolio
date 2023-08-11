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
        className="text-xl text-black group-active:text-gray-500 font-normal"
      >
        {text}
      </Link>
      <div className="h-[0px] w-5 group-hover:w-full border border-black  group-active:border-gray-500"></div>
    </div>
  );
}
