import { IoHome } from "react-icons/io5";
import logo from "../../../public/images/metrologo3.png";
import { Link } from "react-router-dom";
import { MdContactless } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { FaGlobe, FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
// import {motion} from "framer-motion";

const Nav = () => {
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "text-[#A149FA]" : "text-slate-600 hover:text-[#A149FA]";
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen); // Toggle menu
  };

    // const Nav = {
    //   hidden: { opacity: 0, scale: 0.9, translateY: -50 },
    //   visible: { opacity: 1, scale: 1, translateY:0 },
    // };

    return(
        <div className="container mx-auto fixed left-0 right-0 z-20">
          <div className={` ${isOpen ? "bg-transparent" : "bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border text-sm rounded-xl shadow-xl"}`}>
            <div className="flex justify-between p-4 2xl:py-4 2xl:px-24">
              <img src={logo} alt="Logo" className={`h-10 drop-shadow-img ${isOpen ? "hidden" : "block"} sm:block`} />

              {/* Navbar links */}
              <div className="hidden sm:flex sm:gap-8 items-center">
                <Link to="/" className={getNavLinkClass("/")}>
                  <div className="flex gap-1">
                    <div className="text-md">
                      <IoHome />
                    </div>
                    <p className="font-bold text-xs">BERANDA</p>
                  </div>
                </Link>
                <Link to="/about" className={getNavLinkClass("/about")}>
                  <div className="flex gap-1">
                    <div className="text-md">
                      <FaUser />
                    </div>
                    <p className="font-bold text-xs">TENTANG</p>
                  </div>
                </Link>
                <Link to="/contact" className={getNavLinkClass("/contact")}>
                  <div className="flex gap-1">
                    <div className="text-md">
                      <MdContactless />
                    </div>
                    <p className="font-bold text-xs">KONTAK</p>
                  </div>
                </Link>
                <Link to="https://media.metrosoftware.id/" className={getNavLinkClass("https://media.metrosoftware.id/")}>
                  <div className="flex gap-1">
                    <div className="text-md">
                      <FaGlobe />
                    </div>
                    <p className="font-bold text-xs">BLOG</p>
                  </div>
                </Link>
              </div>

              {/* Contact Button */}
              <div className="hidden gap-2 items-center sm:flex">
                <Button as={Link} to="/contact" color="primary" className="bg-[#A149FA] font-bold">Contact</Button>
              </div>

              {/* Hamburger Menu */}
              <div className={`sm:hidden ${isOpen ? "hidden" : "block"}`}>
                <Button isIconOnly color="transparent" onClick={handleOpen} className="text-white text-lg">
                  <GiHamburgerMenu className="text-slate-600" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`block sm:hidden fixed top-0 left-0 h-full w-full bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
              <div className="p-4">
                <div className="flex justify-between">
                  <img src={logo} alt="Logo" className="h-10"/>
                  <Button isIconOnly color="transparent" onClick={handleOpen} className="text-white text-lg">
                    <RxCross2 className="text-slate-600"/>
                  </Button>
                </div>
                <ul className="text-white p-5 text-center">
                  <li className="mb-3">
                    <Link to="/" className={getNavLinkClass("/")}>
                      Home
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/about" className={getNavLinkClass("/about")}>
                      About
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/contact" className={getNavLinkClass("/contact")}>
                      Contact
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to="https://media.metrosoftware.id/" className={getNavLinkClass("https://media.metrosoftware.id/")}>
                      Blog
                    </Link>
                  </li>
                </ul>
                {/* Contact Button */}
                <div className="flex gap-2 justify-center sm:hidden">
                  <Button as={Link} to="/contact" color="primary" className="bg-[#A149FA] font-bold">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
}
export default Nav