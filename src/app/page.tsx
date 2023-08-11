import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Index() {
  return (
    <>
      <div className="w-100 h-[45rem] bg-brick">
        <Navbar />
      </div>
      <div className="w-100 h-[45rem] bg-light">

      </div>
    </>
  );
}
