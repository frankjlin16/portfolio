import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  id,
  date,
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  const isOdd = (id: number) => {
    return id % 2 !== 0;
  };

  return (
    <>
      {id % 2 === 0 ? (
        <>
          <div className="col-span-1">
            <div className="img-card w-full h-80">
              <Image src={image} width={500} height={500} alt="Frank" />
            </div>
          </div>
          <div className="col-span-3 pl-10">
            <div className="opacity-50 text-black text-xl font-semibold uppercase mt-8">
              {date}
            </div>
            <div className="text-black text-3xl font-semibold uppercase">
              <Link className="hover:text-brick" href={link}>
                {title}
              </Link>
            </div>
            <div className="w-52 h-px border border-black mt-10 mb-6"></div>
            <div className="w-full h-24 text-black text-sm font-normal leading-normal">
              {description}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-3 pr-10">
            <div className="opacity-50 text-black text-xl font-semibold uppercase mt-8">
              {date}
            </div>
            <div className="text-black text-3xl font-semibold uppercase">
              <Link className="hover:text-brick" href={link}>
                {title}
              </Link>
            </div>
            <div className="w-52 h-px border border-black mt-10 mb-6"></div>
            <div className="w-full h-24 text-black text-sm font-normal leading-normal">
              {description}
            </div>
          </div>
          <div className="col-span-1">
            <div className="img-card w-full h-80">
              <Image src={image} width={500} height={500} alt="Frank" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
