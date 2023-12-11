import NavBar from "@/components/NavBar";

export default function jebaneGowno() {
  return (
    <div className="bg-darker h-screen">
      <NavBar />
      <div className='flex justify-center'>
        <img className=' max-w-md xl:max-w-7xl absolute top-0 bottom-0 h-full' src='/images/furfur.jpg' />
      </div>     
    </div>
  );
}