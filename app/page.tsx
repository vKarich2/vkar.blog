import Posts from "./components/Posts";
import ProfilePicture from "./components/ProfilePicture";

export default function Home() {
  return (
    <main className="px-6 py-8 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-[#1c1c1c] flex flex-col">Hello and Welcome !&#128075; <span className="whitespace-nowrap">I&apos;m <span className=" font-bold">Vladyslav Karapetov</span>.</span></p>
      <Posts />
    </main>
  );
}

