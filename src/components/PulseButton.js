import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const PulseButton = (props) => {
    return (
        // {if (props.image === "LinkedIn") {
        //     return (
        //         <a href="https://www.linkedin.com/in/eric-johnson-software">
        //             <FaLinkedin className="text-6xl text-bauhaus-blue animate-pulse"/>
        //         </a>
        //     )
        // } else if (props.image === "GitHub") {
        //     return (
        //         <a href="
        // }
        <a target={"_blank"} href={props.link}>
            {props.image === "LinkedIn" && <FaLinkedin  className=" text-9xl text-bauhaus-blue hover:text-[140px]"/>}
            {props.image === "GitHub" && <FaGithub className="text-9xl text-bauhaus-blue hover:text-[140px]"/>}
            {props.image === "Email" && <MdOutlineEmail className="text-9xl text-bauhaus-blue hover:text-[180px]"/>}
        </a>
    )
}

export default PulseButton;
