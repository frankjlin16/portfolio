import Navbar from "@/components/navbar";
import frank from "public/frank.png";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <div id="about" className="w-100 h-[40rem] bg-brick">
        <div className="container mx-auto pt-5">
          <Navbar />
          <div className="container mt-20">
            <div className="grid grid-cols-2">
              <div className="pt-10">
                <div className="uppercase font-bold text-3xl text-black">
                  Hi, I&apos;m Frank!
                </div>
                <div className="uppercase font-bold text-3xl text-black mt-2">
                  Full-Stack Developer
                </div>
                <div className="w-48 h-px border-4 border-black mt-6"></div>
                <div className="w-4/5 h-80 text-black text-sm font-normal leading-normal mt-6">
                  I am a Software Engineering student with over two years of
                  experience in full-stack web development, I bring a strong
                  understanding of Django and React and a passion for building
                  intuitive and scalable web applications. I am a quick and
                  ambitious learner, constantly seeking to expand my knowledge
                  and skill set. With creative problem-solving skills, I can
                  effectively troubleshoot issues and develop innovative
                  solutions to improve the software development process. I have
                  experience working collaboratively in teams, ensuring
                  high-quality products are delivered on time.
                </div>
              </div>
              <div>
                <div className="img-card w-full h-[35rem]">
                  <Image src={frank} width={500} height={500} alt="Frank" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="container mx-auto w-100 bg-light py-20">
        <div className="uppercase font-bold text-3xl text-black mt-10">
          Projects
        </div>
        <div className="grid grid-cols-4 mt-10 gap-y-8">
          <div className="col-span-1">
            <div className="img-card w-full h-80">
              <Image src={frank} width={500} height={500} alt="Frank" />
            </div>
          </div>
          <div className="col-span-3 pl-10">
            <div className="opacity-50 text-black text-xl font-semibold uppercase mt-8">
              2022
            </div>
            <div className="text-black text-3xl font-semibold uppercase">
              E-Web
            </div>
            <div className="w-52 h-px border border-black mt-10 mb-6"></div>
            <div className="w-full h-24 text-black text-xs font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Varius diam egestas
              condimentum sed ullamcorper. Aliquet dui interdum hendrerit
              suspendisse est amet. In et vitae egestas dictumst sapien feugiat.
              Lectus enim in amet adipiscing senectus. Viverra ornare iaculis
              consectetur at amet suspendisse turpis sapien. Adipiscing
              elementum vitae cras arcu. Magna ut bibendum vel massa euismod sed
              adipiscing. Egestas mattis tincidunt et malesuada tristique. Leo
              fermentum mauris nisi non. Pulvinar mi consequat etiam risus
              nullam lacus id vitae.
            </div>
          </div>
          <div className="col-span-3 pr-10">
            <div className="opacity-50 text-black text-xl font-semibold uppercase mt-8">
              2021
            </div>
            <div className="text-black text-3xl font-semibold uppercase">
              Rover
            </div>
            <div className="w-52 h-px border border-black mt-10 mb-6"></div>
            <div className="w-full h-24 text-black text-xs font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Aliquet a amet sagittis
              consequat placerat eget velit justo. Nunc ipsum amet eget
              bibendum. Tincidunt sed egestas tellus nunc donec ut congue
              sagittis morbi. Hac duis et congue luctus turpis lorem ut tellus
              amet. Turpis dolor sodales ac senectus in fringilla fames
              volutpat. Libero tristique eu at morbi egestas donec commodo. Amet
              vulputate tempus ac fermentum. Varius id vel cursus faucibus ut
              tincidunt eget arcu. Diam id congue est integer vivamus. Montes
              fringilla cursus mi sodales leo sollicitudin dictum lectus. Tortor
              elementum non metus blandit. Maecenas arcu velit pharetra
              suspendisse tristique aenean. Auctor vitae gravida elementum
              bibendum.
            </div>
          </div>
          <div className="col-span-1">
            <div className="img-card w-full h-80">
              <Image src={frank} width={500} height={500} alt="Frank" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
