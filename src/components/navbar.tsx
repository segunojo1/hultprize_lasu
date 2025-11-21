
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0">
      <div className="mx-auto w-full max-w-[1549px] px-[89px] font-sans poppins flex items-center justify-between py-[46px]">
        <Logo />
        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li className="p-2.5 text-[20px] font-medium ">Home</li>
            <li className="p-2.5 text-[20px] font-medium ">Contact</li>
          </ul>
          <Button className="h-full poppins-semibold bg-primary py-2.5 px-[60px] text-[20px] font-semibold rounded-[30px]">Register Team</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
