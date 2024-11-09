import { Button, Card, CardBody, Image } from "@nextui-org/react";
import Footer from "../components/layouts/Footer"
import Nav from "../components/layouts/Navbar"
import android from "../../public/images/android.png";
import web from "../../public/images/internet.png";
import figma from "../../public/images/figma.png";

import { Link } from "react-router-dom";
import {Pagination as NextUIPagination} from "@nextui-org/react";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


const DetailProject = () => {
    // const Projects = [
    //     {
    //         img: "/images/Project's Done/1.jpg",
    //         title: "Metro Indonesia1",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/2.jpg",
    //         title: "Metro Indonesia2",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/3.jpg",
    //         title: "Metro Indonesia3",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/4.jpg",
    //         title: "Metro Indonesia4",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/5.jpg",
    //         title: "Metro Indonesia5",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/6.jpg",
    //         title: "Metro Indonesia6",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    // ];
    const cardVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    };

    const [project, setProject] = useState({ r_service: [] });

    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentProjects = projects && projects.length > 0 
    ? projects.slice(indexOfFirstItem, indexOfLastItem) 
    : [];

    const location = useLocation();
    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        const fetchData = async () => {
            try {
                // Ambil data proyek detail
                const responseDetail = await axios.get(`https://api-compro.metrosoftware.id/api/projects/${id}`);
                setProject(responseDetail.data.data);
                console.log("Detail Project:", responseDetail.data.data);

                // Ambil semua proyek dan filter proyek yang saat ini ditampilkan
                const responseProjects = await axios.get('https://api-compro.metrosoftware.id/api/projects');
                const filteredProjects = responseProjects.data.data.filter(item => item.id !== parseInt(id));
                setProjects(filteredProjects);
                console.log("Filtered Projects:", filteredProjects);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };
            fetchData();
        }, [location.pathname]);
    return (
        <div>
            {/* Hero */}
            <div className="banner2 mb-10">
                <div className="pb-5"></div>
                <Nav />
                {/* Hero */}
                <div className="container mx-auto mt-32 2xl:mt-52 px-5 overflow-hidden">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="flex w-full max-w-[400px]">
                            <motion.div className="pt-1 bg-[#A149FA] w-full max-w-[100px] my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} viewport={{once: false, amount: 0.5}}></motion.div>
                        </div>
                        <motion.p className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-700" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: false, amount: 0.5}}>Detail Project</motion.p>
                        <motion.p className="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-slate-700" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}>{project.title}</motion.p>
                        <div className="flex justify-end w-full max-w-[400px]">
                            <motion.div className="pt-1 bg-[#23F9B5] w-full max-w-[120px] my-3" transition={{duration: 1, delay: 1.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} viewport={{once: false, amount: 0.5}}></motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail */}
            <div className="container mx-auto px-5 lg:px-10 2xl:px-0 2xl:max-w-[68%] lg:mt-0">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 xl:gap-16 items-center md:justify-center">
                    <div className="overflow-hidden rounded-2xl max-w-[600px] max-h-[400px] mx-3 md:mx-0">
                        <img src={`https://api-compro.metrosoftware.id/dist/assets/img/projects/${project.img}`} alt="" className="object-cover w-full shadow-lg" />
                    </div>
                    <div className="text-center px-5 xl:px-0 lg:text-start md:w-1/2">
                        <p className="font-semibold text-xl 2xl:text-3xl text-[#45474B]">{project.title}</p>
                        {/* <p className="text-xs text-[#A149FA]">React.js, Laravel, Node.js</p> */}
                        <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mt-2 mx-auto lg:mx-0" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>

                        <div className="flex gap-2 mt-5 justify-center lg:justify-start">
                            {project.r_service.map((service) => (
                            <div key={service.id} className="flex items-center gap-2">
                                {service.title === "UI - UX Design" && (
                                <img src={figma} alt="UI/UX" className="w-[20px] h-[20px]" />
                                )}
                                {service.title === "Website Development" && (
                                <img src={web} alt="Web" className="w-[20px] h-[20px]" />
                                )}
                                {service.title === "Mobile Development" && (
                                <img src={android} alt="Android" className="w-[20px] h-[20px]" />
                                )}
                            </div>
                            ))}
                        </div>
                        <p className="text-slate-500 my-4 text-sm xl:text-base">{project.description}</p>
                        <Button className="text-[#A149FA] border-[#A149FA] hover:bg-[#A149FA] hover:text-white rounded-full" size="md" variant="bordered" as={Link} to={project.link} target="_blank">Go To Website</Button>
                    </div>
                </div>
            </div>

            {/* Project's Done */}
            <div className="container mx-auto mt-32 px-5 2xl:px-0 2xl:max-w-[68%]">
                <div className="text-center">
                    <p className="font-bold text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl text-[#45474B]">More Project's Done</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-5 xl:mx-0">
                    {currentProjects && currentProjects.length > 0 ? (
                        currentProjects.map((item, index) => (
                        <motion.div key={item.id} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: true, amount: 0.5}}>
                        {/* <motion.div key={item.id} isPressable onPress={() => console.log("item pressed")} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}}> */}
                            <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="w-full" as={Link} to={`/detail/${item.id}`}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                width="100%"
                                height="70%"
                                alt={item.title}
                                className="w-full object-cover h-[250px] rounded-none"
                                src={`https://api-compro.metrosoftware.id/dist/assets/img/projects/${item.img}`}
                                />

                                <div className="flex justify-between px-5 pt-5 pb-2">
                                    <p className="text-slate-800 font-semibold text-center text-sm">{item.title && item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}</p>
                                    <div className="flex gap-2">
                                        {item.r_service.map((service, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            {service.title === "UI - UX Design" && (
                                            <img src={figma} alt="UI/UX" className="w-[20px] h-[20px]" />
                                            )}
                                            {service.title === "Website Development" && (
                                            <img src={web} alt="Web" className="w-[20px] h-[20px]" />
                                            )}
                                            {service.title === "Mobile Development" && (
                                            <img src={android} alt="Android" className="w-[20px] h-[20px]" />
                                            )}
                                        </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-5 min-h-[40px]">
                                    <p className="text-default-500 text-xs">{item.description && item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}</p>
                                </div>
                            </CardBody>
                        </Card>
                        {/* </motion.div> */}
                        </motion.div>
                    ))
                    ) : (
                        <p className="text-center text-gray-500 mt-5">No Data</p>
                    )}
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-10 justify-center">
                    {projects && projects.length > itemPerPage && (
                        <NextUIPagination
                            total={Math.ceil(projects.length / itemPerPage)}
                            initialPage={1}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="secondary"
                        />
                    )}
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}
export default DetailProject