import React from "react";
import { Header, Paragraph, Break } from "../styles/StyledComponents";
import ericImage from "../assets/images/eric.jpg";

 
const Home = () => {
    return (
        <div>
            {/* <Header>Eric's Resume</Header>
            <Break />
            <Paragraph>Welcome to Eric's Resume and Project showcase site. Here you can learn more about Eric, as well as his work experience,
                and projects he has worked on. Feel free to reach out to Eric if you have any questions or would like to learn more about his work.
            </Paragraph> */}
            <div className="flex justify-center pt-[30px] w-screen h-[300px] bg-slate-400">
                <div className="flex box-border h-[200px] w-[200px] border-4 justify-center">
                    <img src={ericImage} className="object-cover h-full w-full" />
                </div>
            </div>

        </div>
    );
};
 
export default Home;