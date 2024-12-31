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
                <h3 className="text-2xl pb-10 font-sans text-bauhaus-blue">Contact me here!</h3>
            </div>
            <div className="flex justify-center w-screen h-[200px]">
            {sites.map((site) => {
                return (
                    <div className="flex items-center justify-center w-1/5 mx-2">
                    <PulseButton image={site.name}/>
                    </div>
                )
            })}

            </div>
        </div>
    );
}

export default Contact;