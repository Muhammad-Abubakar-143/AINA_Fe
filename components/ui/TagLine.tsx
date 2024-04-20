import brackets from "./svg/Brackets";


const TagLine = ({ className, children }:{className:string,childern:React.ReactNode}) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-[#757185]">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
