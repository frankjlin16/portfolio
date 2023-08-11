import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <nav className="bg-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <Link href="/">
              <Image src="/images/logo.svg" alt="logo" width={150} height={50}/>
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/"
              className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
