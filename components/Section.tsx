import SectionSvg from "./ui/svg/SectionSvg";


const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}:{
  className: string,
  id:string,
  crossesOffset:string,
  customPaddings:Boolean,
  crosses: Boolean,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      {/* <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-[#fff] pointer-events-none md:block lg:left-7.5 xl:left-10" /> */}
      {/* <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-[#fff] pointer-events-none md:block lg:right-7.5 xl:right-10" /> */}
      <div className="w-[10%] bg-white relative z-10 "/>
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-[#fff] z-10 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
