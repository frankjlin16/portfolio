import Link from "next/link";
import "./navlink.css";

interface NavlinkProps {
    href: string;
    text: string;
}

export default function Navlink({ href, text }: NavlinkProps) {
    return (
        <div className="outer-div">
            <Link href={href} className="text-2xl font-normal text-light">{text}</Link>
            <div className="inner-div h-[0px] border border-light"></div>
        </div>
    );
}