import Image from "next/image";

const infos = [
  {
    id: 0,
    title: "Location",
    content: "Phoenix, AZ",
  },
  {
    id: 1,
    title: "Email",
    content: process.env.EMAIL,
  },
];

export default function Contact() {
  return (
    <div className="container mx-auto py-20 grid grid-cols-4">
      <div id="contact-info" className="col-span-1">
        <div className="uppercase font-bold text-3xl text-text mb-10">
          Contact
        </div>
        {infos.map((info) => (
          <div className="mb-5" key={info.id}>
            <div className="font-bold mb-2 text-text">{info.title}</div>
            <div className="text-text">{info.content}</div>
          </div>
        ))}
      </div>
      <div id="contact-image" className="col-span-3">
        <div className="img-card h-[15rem]">
          <Image
            src="https://images.unsplash.com/photo-1512428197675-daae5d4e1e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80"
            width={500}
            height={500}
            alt="Image of Arizona"
          />
        </div>
      </div>
    </div>
  );
}
