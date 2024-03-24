const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="scroll-smooth pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      
        {children}
      
    </main>
   );
}
 
export default LandingLayout;