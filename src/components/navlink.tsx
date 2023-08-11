import Link from "next/link";

interface NavlinkProps {
    href: string;
    text: string;
}

export default function Navlink({ href, text }: NavlinkProps) {
    return (
        <div className="group text-light border-light active:text-accent active:border-accent">
            <Link href={href} className="text-xl font-normal">{text}</Link>
            <div className="h-[0px] w-5 border group-hover:w-full"></div>
        </div>
    );
}