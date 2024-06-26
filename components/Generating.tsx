import Image from "next/image";

const Generating = ({ className }:{className:string}) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] lg:backdrop-blur-sm bg-black/25 backdrop-blur-sm px-6 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Image className="w-5 h-5 mr-4" src="/loading.png" width={30} height={30} alt="Loading" />
      AINA is thinking
    </div>
  );
};

export default Generating;
