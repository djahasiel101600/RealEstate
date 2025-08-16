import logo from "@/assets/logo.png";
import { Button } from "./button";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="w-screen px-10">
        <div className="flex justify-between items-center border-b-1">
          <div>
            <img src={logo} width={220} alt="" />
          </div>
          <div className="flex gap-4">
            <div>
              <Button
                className="rounded-full px-6 hover:bg-black hover:text-white transition-colors duration-300 ease-in"
                variant={"secondary"}
              >
                CALL NOW
              </Button>
            </div>
            <div>
              <BiMenuAltRight className="text-4xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
