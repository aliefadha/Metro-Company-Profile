import Ig from "../../../public/images/ig.svg";
import Linkedin from "../../../public/images/linkedin.svg";
import Fb from "../../../public/images/fb.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
       <div className="mt-24 bg-gradient-to-r from-black to-slate-600">
            <div className="">
                <div className="container mx-auto pt-12 2xl:max-w-[68%]">
                    <div className="flex flex-col lg:flex-row justify-between gap-5">
                        <div className="lg:w-2/4 px-5 2xl:px-0 2xl:w-1/3">
                            <p className="text-[#23F9B5] lg:text-xl">Metro Indonesian Software</p>
                            <div className="bg-white h-[1px] max-w-[100px] mt-2"></div>
                            <p className="text-white mt-2 text-xs lg:text-xs">Metro Indonesian Software merupakan sebuah perusahaan yang berfokus pada pengembangan perangkat lunak dan solusi teknologi dengan visi untuk menjadi perusahaan terkemuka di Indonesia, menggabungkan inovasi dan keahlian dalam pengembangan perangkat lunak dengan kebanggaan atas identitas Indonesia.</p>
                            <div className="flex gap-2 mt-4">
                                <img src={Ig} alt="" className="w-5" />
                                <img src={Linkedin} alt="" className="w-5" />
                                <img src={Fb} alt="" className="w-5" />
                            </div>
                        </div>

                        <div className="lg:w-1/4 px-5 2xl:px-0">
                            <p className="text-[#23F9B5] lg:text-xl">Quick Links</p>
                            <div className="bg-white h-[1px] max-w-[100px] my-2"></div>
                            <Link to="/" className="text-white mt-2 text-xs lg:text-xs hover:text-[#23F9B5]">Beranda</Link> <br />
                            <Link to="/about" className="text-white mt-2 text-xs lg:text-xs hover:text-[#23F9B5]">Tentang Kami</Link> <br />
                            <Link to="/contact" className="text-white mt-2 text-xs lg:text-xs hover:text-[#23F9B5]">Kontak</Link>
                        </div>

                        <div className="lg:w-1/4 px-5 2xl:px-0">
                            <p className="text-[#23F9B5] lg:text-xl">Get In Touch</p>
                            <div className="bg-white h-[1px] max-w-[100px] mt-2"></div>
                            <p className="text-white mt-2 text-xs lg:text-xs">Seberang Padang, Padang Selatan, Kota Padang, Sumatera Barat</p>
                            <p className="text-white mt-2 text-xs lg:text-xs">metroindo.software@gmail.com</p>
                            <p className="text-white mt-2 text-xs lg:text-xs">+62 822-8960-8096</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-3 mt-8">
                <p className="text-white text-center text-xs lg:text-sm">© 2024 Metro Indonesian Software</p>
            </div>
       </div>
    )
}
export default Footer