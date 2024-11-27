import Footer from "../components/layouts/Footer"
import Nav from "../components/layouts/Navbar"
import bg from "../assets/bg.png";
import phone from "../../public/images/phone.svg";
import instagram from "../../public/images/instagram.svg";
import gmail from "../../public/images/gmail.svg";
import tt from "../../public/images/tt.svg";
import whatsapp from "../../public/images/whatsapp.svg";
import maps from "../../public/images/maps.svg";
import email from "../../public/images/email.svg";
import map from "../../public/images/map.svg";
import ig from "../../public/images/ig.svg";
import tiktok from "../../public/images/tiktok.svg";
import banner from "../../public/images/banner.svg";
import {motion} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
    const Contacts = [
        {
            id: 1,
            img: phone,
            title: "Phone",
            desc: "+62 822-8960-8096",
            link: "https://wa.me/6282289608096",
        },
        {
            id: 2,
            img: email,
            title: "Email",
            desc: "metroindo.software@gmail.com",
            link: "mailto:metroindo.software@gmail.com"
            
        },
        {
            id: 3,
            img: map,
            title: "Address",
            desc: "Jl. Dr. Sutomo No.48, Simpang Haru, Kota Padang",
            link: "https://maps.app.goo.gl/HBjB8S64koaiaaqS6"
        },
        {
            id: 4,
            img: ig,
            title: "Instagram",
            desc: "@metrosoftware",
            link: "https://www.instagram.com/metrosoftware",
        },
        {
            id: 5,
            img: tiktok,
            title: "TikTok",
            desc: "@metrosoftware",
            link: "https://www.tiktok.com/@metrosoftware",
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Hero */}
            <div className="relative overflow-hidden pb-10 xl:pb-20 2xl:pb-32">
                <img src={banner} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-[-1]" />

                <div className="pb-5"></div>
                <Nav />
                {/* Hero */}
                <div className="container mx-auto mt-32 2xl:mt-52 px-5">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <motion.p className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-700" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.5 }} viewport={{once: true, amount: 0.5}}>Contact Us</motion.p>
                        <div className="flex gap-4 mt-1">
                            <motion.div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl" transition={{duration: 1, delay: 1.6, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: true, amount: 0.5}}>
                                <img src={whatsapp} alt="" className="w-4/6 h-4/6 md:w-3/5 md:h-3/5 object-contain"/>
                            </motion.div>
                            <motion.div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl" transition={{duration: 1, delay: 1.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: true, amount: 0.5}}>
                                <img src={gmail} alt="" className="w-4/6 h-4/6 md:w-3/5 md:h-3/5 object-contain"/>
                            </motion.div>
                            <motion.div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl" transition={{duration: 1, delay: 1.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: true, amount: 0.5}}>
                                <img src={maps} alt="" className="w-4/6 h-4/6 md:w-3/5 md:h-3/5 object-contain"/>
                            </motion.div>
                            
                            <motion.div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: true, amount: 0.5}}>
                                <img src={instagram} alt="" className="w-3/6 h-3/6 md:w-3/5 md:h-3/5 object-contain"/>
                            </motion.div>
                            <motion.div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl" transition={{duration: 1, delay: 1.4, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: true, amount: 0.5}}>
                                <img src={tt} alt="" className="w-4/6 h-4/6 md:w-3/5 md:h-3/5 object-contain"/>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="container mx-auto mt-12 px-5 overflow-hidden 2xl:max-w-[68%] 2xl:mt-0">
                <motion.div className="relative flex justify-center" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{once: true, amount: 0.5}}>
                    <img src={bg} alt="" className="object-fit-cover w-full h-[200px] rounded-3xl shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/5">
                        <div className="hidden lg:flex items-center py-4">
                            {Contacts.map((data) => {
                                return (
                                    <Link to={data.link} key={data.id} className="flex flex-col items-center w-[300px] mx-4">
                                        <img src={data.img} alt="" className="h-10" />
                                        <p className="text-[#23F9B5] mt-1">{data.title}</p>
                                        <p className="text-white text-center text-xs 2xl:text-sm">{data.desc}</p>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="block mt-2 lg:hidden">
                            <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} autoplay={{delay: 3000}}>
                                {Contacts.map((data, i) => (
                                    <SwiperSlide key={data.id}>
                                        <Link to={data.link} key={i} className="flex flex-col items-center justify-center">
                                            <img src={data.img} alt="" className="h-10" />
                                            <p className="text-[#23F9B5] text-xl mt-1 text-center">{data.title}</p>
                                            <p className="text-white text-md text-center">{data.desc}</p>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Location */}
            <div className="container mx-auto mt-12 px-5 overflow-hidden 2xl:max-w-[68%]">
                <div className="text-center mb-12">
                    <p className="font-bold text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl text-[#45474B]">Our Location</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: true, amount: 0.5}}></motion.div>
                </div>
                <motion.div transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} viewport={{once: true, amount: 0.5}}>
                    <div className="w-full aspect-w-16 aspect-h-9 md:h-[500px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.272884225966!2d100.37868577585641!3d-0.9474099990434341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b94362a6f767%3A0x556ec93e4b0d0f26!2sSoftware%20House%20Padang%20%7C%20PT.%20Metro%20Indonesian%20Software%20%7C%20Jasa%20pembuatan%20website%2C%20company%20profile%2C%20dan%20aplikasi%20mobile.!5e0!3m2!1sid!2sid!4v1729334623344!5m2!1sid!2sid" 
                            className="w-full h-full"
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
export default Contact