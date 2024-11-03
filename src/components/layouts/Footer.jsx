import Ig from "../../../public/images/ig.svg";
import Linkedin from "../../../public/images/linkedin.svg";
import Fb from "../../../public/images/fb.svg";

const Footer = () => {
    return(
       <div className="mt-24 bg-gradient-to-r from-black to-slate-600">
            <div className="">
                <div className="container mx-auto pt-12">
                    <div className="flex flex-col lg:flex-row justify-between gap-5">
                        <div className="lg:w-2/4 px-5 2xl:px-0 2xl:w-1/3">
                            <p className="text-[#23F9B5] text-lg lg:text-2xl">Metro Indonesian Software</p>
                            <div className="bg-white h-[1px] max-w-[100px] mt-2"></div>
                            <p className="text-white mt-2 text-xs lg:text-sm">Metro Indonesian Software merupakan sebuah perusahaan yang berfokus pada pengembangan perangkat lunak dan solusi teknologi dengan visi untuk menjadi perusahaan terkemuka di Indonesia, menggabungkan inovasi dan keahlian dalam pengembangan perangkat lunak dengan kebanggaan atas identitas Indonesia.</p>
                            <div className="flex gap-2 mt-4">
                                <img src={Ig} alt="" className="w-5" />
                                <img src={Linkedin} alt="" className="w-5" />
                                <img src={Fb} alt="" className="w-5" />
                            </div>
                        </div>

                        <div className="lg:w-1/4 px-5 2xl:px-0">
                            <p className="text-[#23F9B5] text-lg lg:text-2xl">Quick Links</p>
                            <div className="bg-white h-[1px] max-w-[100px] mt-2"></div>
                            <p className="text-white mt-2 text-xs lg:text-sm">Beranda</p>
                            <p className="text-white mt-2 text-xs lg:text-sm">Tentang Kami</p>
                            <p className="text-white mt-2 text-xs lg:text-sm">Kontak</p>
                        </div>

                        <div className="lg:w-1/4 px-5 2xl:px-0">
                            <p className="text-[#23F9B5] text-lg lg:text-2xl">Get In Touch</p>
                            <div className="bg-white h-[1px] max-w-[100px] mt-2"></div>
                            <p className="text-white mt-2 text-xs lg:text-sm">Seberang Padang, Padang Selatan, Kota Padang, Sumatera Barat</p>
                            <p className="text-white mt-2 text-xs lg:text-sm">metroindo.software@gmail.com</p>
                            <p className="text-white mt-2 text-xs lg:text-sm">+62 822-8960-8096</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-3 border-t-1 mt-8">
                <p className="text-white text-center text-xs lg:text-sm">© 2024 Metro Indonesian Software</p>
            </div>
       </div>
    )
}
export default Footer