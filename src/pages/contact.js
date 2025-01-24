import React from "react";
import PulseButton from "../components/PulseButton";


const sites = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/eric-johnson-software"
    },
    {
        name: "GitHub",
        link: "https://github.com/Enr1que704"
    },
    {
        name: "Email",
        link: "mailto:ericdavidjohns@gmail.com"
    }
]

const Contact = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-r from-calgar-blue/30 to-night-dive/30 ">
            <div className="flex w-screen justify-center pt-[20px]">
                <div className="flex items-center">
                    <h1 className="text-6xl font-sans text-bauhaus-blue text-center pr-3">Contact</h1>
                </div>
            </div>
            <div className="flex w-screen justify-center pt-[20px]">
                <h3 className="text-2xl pb-10 font-sans text-bauhaus-blue">Here are some ways you can reach me</h3>
            </div>
            <div className="h-[30px]"></div>
            <div className="flex flex-col md:flex-row justify-center items-center w-1/2 h-[200px] mx-auto mt-10">
            
            {sites.map((site) => {
                return (
                    <div className="flex items-center justify-center w-full md:w-1/5 mx-2 my-2 md:my-0">
                    <PulseButton image={site.name} link={site.link}/>
                    </div>
                )
            })}

            </div>
        </div>
    );
}

export default Contact;