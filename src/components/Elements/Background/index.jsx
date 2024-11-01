import Laptop from "../../../assets/laptop.png";
import Vue from "../../../assets/vue.svg";
import Laravel from "../../../assets/laravel.svg";
import Reactjs from "../../../assets/react.svg";
import Vscode from "../../../assets/vscode.svg";
import Figma from "../../../assets/figma.svg";
import Node from "../../../assets/node.svg";
import {motion} from "framer-motion";


const Background = () => {
    const Var = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    };
    return (
        <div className="relative container mx-auto">
                <motion.img src={Laptop} alt="" className="max-h-[315px] mx-auto" variants={Var} transition={{duration: 2, delay: 0.3, type: "spring"}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}}/>
                <motion.img src={Vue} alt="" className="absolute top-[-5%] left-[27%]"
                    animate={{ y: [0, 5, -5, 5, 0], x: [0, 3, -3, 3, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 0,
                    }}
                />
                <motion.img src={Laravel} alt="" className="absolute top-[16%] left-[20%] -translate-x-1/2"
                    animate={{ y: [0, 5, -5, 5, 0], x: [0, 3, -3, 3, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 0.2,
                    }}
                />
                <motion.img src={Reactjs} alt="" className="absolute top-[42%] left-[20%] -translate-x-1/2"
                    animate={{ y: [0, 5, -5, 5, 0], x: [0, 3, -3, 3, 0] }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                />
                <motion.img src={Vscode} alt="" className="absolute top-[-10%] right-[30%]"
                    animate={{ y: [0, 5, -5, 5, 0], x: [0, 3, -3, 3, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 0,
                    }}
                />
                <motion.img src={Figma} alt="" className="absolute top-[5%] right-[20%]"
                    animate={{ y: [0, 5, -5, 5, 0], x: [0, 3, -3, 3, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 0.2,
                    }}
                />
                <motion.img src={Node} alt="" className="absolute top-[30%] right-[25%]"
                    animate={{ y: [0, 5, -5, 5, 0], x: [0, 3, -3, 3, 0] }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                />
        </div>
    );
};

export default Background;