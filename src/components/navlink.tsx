import Link from "next/link";

interface NavlinkProps {
    href: string;
    text: string;
}

export default function Navlink({ href, text }: NavlinkProps) {
    return (
        <div>
            <Link href={href} className="text-2xl font-normal text-light">{text}</Link>
            <div className="w-5 h-[0px] border border-light"></div>
        </div>
    );
}