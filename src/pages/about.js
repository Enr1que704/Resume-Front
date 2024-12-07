import React from "react";
import { Break, Header, Paragraph } from "../styles/StyledComponents";

const About = () => {
    return (
        <div>
            <Header>About</Header>
            <Break />
            <div className="bg-blue-500 text-white p-4">
                This is a Tailwind CSS styled component.
            </div>
        </div>
    );
}

export default About;