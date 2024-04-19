import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

import github from '../public/github.svg'
import dribbble from '../public/dribbble.svg'
import instagram from '../public/instagram.svg'
import linkedin from '../public/linkedin.svg'

export default function Home() {
  return (
    <main className=" ml-11 mt-16 font-Oswald text-[40px] font-semibold leading-[45px]">
      <p className="mb-5">Hello and Welcome!&#128075;<br/>I&apos;m Vladyslav Karapetov.</p>
      <div className=" mb-5 flex font-Quicksand font-normal text-xl gap-4 text-[#696969]">
        <p>Front-end Developer</p>
        <div className=" w-[1px] bg-[#696969] rounded-full"></div>
        <p>UI/UX Designer</p>
      </div>
      <div className="flex gap-3">
        <Link className=" opacity-90 hover:opacity-100 transition-opacity duration-300" href={'https://www.github.com/'}><Image src={github} alt="github" width={50} height={50} /></Link>
        <Link className=" opacity-90 hover:opacity-100 transition-opacity duration-300" href={'https://www.dribbble.com/'}><Image src={dribbble} alt="dribbble" width={50} height={50} /></Link>
        <Link className=" opacity-90 hover:opacity-100 transition-opacity duration-300" href={'https://www.instagram.com/'}><Image src={instagram} alt="instagram" width={50} height={50} /></Link>
        <Link className=" opacity-90 hover:opacity-100 transition-opacity duration-300" href={'https://www.linkedin.com/'}><Image src={linkedin} alt="linkedin" width={50} height={50} /></Link>
      </div>
      <Posts />
      <Footer />
    </main>
  );
}

