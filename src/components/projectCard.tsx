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
  return (
    <div className="grid grid-cols-4 mb-20">  
        {id % 2 === 0 ? (
        <>
          <div className="col-span-1">
            <div className="img-card w-full h-[26rem]">
              <Image src={image} width={500} height={500} alt="Frank" />
            </div>
          </div>
          <div className="col-span-3 pl-10">
            <div className="opacity-50 text-text text-xl font-semibold uppercase mt-8">
              {date}
            </div>
            <div className="text-text text-3xl font-semibold uppercase">
              <Link className="hover:text-primary" href={link}>
                {title}
              </Link>
            </div>
            <div className="w-52 h-px border border-text mt-10 mb-6"></div>
            <div className="w-full text-text text-base font-normal leading-normal">
              {description}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-3 pr-10">
            <div className="opacity-50 text-text text-xl font-semibold uppercase mt-8">
              {date}
            </div>
            <div className="text-text text-3xl font-semibold uppercase">
              <Link className="hover:text-primary" href={link}>
                {title}
              </Link>
            </div>
            <div className="w-52 h-px border border-text mt-10 mb-6"></div>
            <div className="w-full text-text text-base font-normal leading-normal">
              {description}
            </div>
          </div>
          <div className="col-span-1">
            <div className="img-card w-full h-[26rem]">
              <Image src={image} width={500} height={500} alt="Frank" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
