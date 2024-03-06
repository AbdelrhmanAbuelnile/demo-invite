import Image from "next/image";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-20">
      <div className="w-[800px] bg-gradient-to-b from-[#AB96F8] to-[#FF99D0] p-2 rounded-md relative">
      <video className="w-full h-full" autoPlay loop muted>
        <source src='https://res.cloudinary.com/dmmbxksq2/video/upload/v1709688023/hzjjiucsdzhziemvfp7k.mp4' />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="flex justify-between items-center w-7/12">
        <div className="box bg-slate-300 w-56">
          <Image src={img1} alt="logo" className="w-full"/>
        </div>
        <div className="box bg-slate-300 w-56">
          <Image src={img2} alt="logo" className="w-full"/>
        </div>
        <div className="box bg-slate-300 w-56">
          <Image src={img3} alt="logo" className="w-full"/>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between items-end gap-5">
          <div className="flex justify-center items-end gap-1 text">
            <p className=" text-6xl">Free</p>
            <p className="">Free<br/>Forever</p>
          </div>
          <div className="flex justify-center items-end gap-1 text">
            <p className=" text-6xl">Unlimited</p>
            <p className="">Tutorial<br/>Creation</p>
          </div>
          <div className="flex justify-center items-end gap-1 text">
            <p className=" text-6xl">Powerful</p>
            <p className="">Editor &<br/>Integrations</p>
          </div>
        </div>
        <div className="manga"></div>
      </div>

      <div className="w-3/4 flex justify-between items-center bg-black rounded-t-xl p-8 text-slate-200">
        <div className="flex flex-col justify-cecnter items-start gap-3">
          <h2>Create Lorem, ipsum.</h2>
          <p className="text-wrap w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ad?</p>
        </div>
        <div className="">
          <p
          className="
            flex
            justify-center
            items-center
            gap-2
            cursor-pointer
            z-10
            catch
          "
          >
            Try Wizardshot <FaArrowRight />
          </p>
        </div>
      </div>
    </main>
  );
}
