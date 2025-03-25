import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Main() {
  return (
      <div className="w-full flex flex-row items-start bg-gradient-to-br from-[#191E28] to-[#141820] h-screen">
          <SideBar />
          <div className='flex items-center w-full h-screen bg-[url(/images/bg.png)] bg-no-repeat bg-cover bg-bottom'>
            <div className="flex flex-col items-center m-auto w-full mt-10 p-4 rounded backdrop-blur-lg bg-[rgba(0,0,0,0.5)]">
                <div className="text-4xl font-bold">Genshin Impact Database</div>
            </div>
          </div>
    </div>
  );
}