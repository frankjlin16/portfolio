import Navbar from "@/components/navbar";
import Image from "next/image";

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
                  <Image
                    src="https://lh3.googleusercontent.com/pw/AIL4fc9QO7fQqIzscLgDfuqq2Fg4idjh8veOM-qQe-VIXh_4KHf3JVT0ZmlnRRLK0vBGL8HK26pGv8fbaT4tdCUZYXB1WVDLpg9jewR_0l2o47a6m4XL-9Rc-lZb1SFSGW8cAvOLV2x-u8d1oxYp0vzNwXLE_YAY1xcl69yI2qHzrg-m3lgO-EMjFLtmZ5YiipZBvGH5w-OfyrvVDTaV5tSqROyRBlvXHtxu6IDZPvCad99NhEG1bPUYuHaMf0IBMWlDgWXHXgXJfmYlqXS9I-CZKOj2kJqpJq9ODLKMLnLEyWb-PIC_UFjTn8QqFQL4dZjukFKjfVgppOxH10L1yaoCYjpJeO-UapwpEtm0v3UcFSBjeyNG9sSYpGdCOCuaJ52lrsJvtMQ1GJUfWKPGJR7mRuP9A1bMAX8abF5TVxnCh-dgVHLVFa6NkQ83CsZaoZ1IXX8gDsKYtxeo3fSbNxuMfX_cXhDqhmqHHmIo-yZooLwVvt9rXqEX1fow_eSd0zJuHlSqDjKan2aQ4YfFPlotDHtCU8rU0kmK4cwghvHz0BTIytmwknlc7SARx26nCctEfeX1DZEBISW2C3YRMXtCh95g1PQWlNYzjbvX0l-usd2PSDC26ajrI3v8CYZk5uoj1rCohxRW1vozrtzpZ8RnEmc9wx8zSTKrLVrZWO2iOQnJDPxQcKY0BEgW2FuRch_hOH4-ZhV2FXyX3fnVuCWLTeJmz47SISpgo54S810Y4pmOu4gXGl9rczQJx8Cy4Uto__V7Afr6bmVkWoh52KYhoNCOxeQiqiOjcXwRciCGDpKxInJgktvoXkkN0zzotRGa75YTvh-G2QuzWcPDCHETX53mgv-pEIIqPkzzG6P6WSYWsGPHgGop_Xf2qqg_vYLSFrSFxISnRa1lWMC1ohRJLw6rppBZxlPABQ-Ccz3V9F9rFRc5qjVToyD_Lio=w688-h860-s-no?authuser=0"
                    width={833}
                    height={833}
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
