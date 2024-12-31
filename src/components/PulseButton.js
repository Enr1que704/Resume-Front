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
        <a href={props.link}>
            {props.image === "LinkedIn" && <FaLinkedin className="text-6xl text-bauhaus-blue hover:animate-hover-pulse"/>}
            {props.image === "GitHub" && <FaGithub className="text-6xl text-bauhaus-blue hover:animate-hover-pulse"/>}
            {props.image === "Email" && <MdOutlineEmail className="text-6xl text-bauhaus-blue hover:animate-hover-pulse"/>}
        </a>
    )
}

export default PulseButton;
