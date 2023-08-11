import Navbar from "@/components/navbar";

export default function Index() {
  return (
    <>
      <div className="w-100 h-[40rem] bg-brick">
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
                <div className="profile-img">
                  <img
                    src="https://onedrive.live.com/embed?resid=93EB8CC9A4B2ADF3%211664&authkey=%21AGnfeN4QRzYL89A&width=833&height=833" width={833} height={833}
                    alt="Frank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h-[45rem] bg-light"></div>
    </>
  );
}
