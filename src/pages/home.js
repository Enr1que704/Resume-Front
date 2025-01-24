import React from "react";
import { Header, Paragraph, Break } from "../styles/StyledComponents";
import ericImage from "../assets/images/eric.jpg";
// import Example from "../components/Example";
import HoverSpring from "../components/SkillSection";
import TextGradient from "../components/TextGradient";


 
const Home = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-r from-calgar-blue/30 to-night-dive/30 ">
            {/* <Header>Eric's Resume</Header>
            <Break />
            <Paragraph>Welcome to Eric's Resume and Project showcase site. Here you can learn more about Eric, as well as his work experience,
                and projects he has worked on. Feel free to reach out to Eric if you have any questions or would like to learn more about his work.
            </Paragraph> */}
            
            {/* <div className="shadow-lg pt-6 bg-white rounded-lg"> */}
                <div className="flex justify-center pt-[30px] w-screen h-[250px]">
                    <div className="flex box-border h-[200px] w-[200px] border-4 justify-center rounded-full border-night-dive bg-night-dive">
                            <img src={ericImage} className="object-cover h-full w-full rounded-full" />
                    </div>
                </div>
                <div className="flex w-screen justify-center pt-[20px]">
                    <div className="flex items-center">
                        <h1 className="text-6xl font-sans text-bauhaus-blue text-center pr-3">Hi, I'm</h1>
                        <TextGradient text="Eric Johnson" />
                    </div>
                </div>
                <div className="flex w-screen justify-center pt-[20px]">
                        <h3 className="text-2xl pb-10 font-sans text-bauhaus-blue">Full-stack Developer</h3>
                </div>
                <div className="flex justify-center w-1/3 mx-auto text-wrap pb-5">
                    <p className="text-xl text-void text-center">
                        I love to design and create intelligent, user-friendly applications.
                    </p>
                    
                </div>
                <div className="flex justify-center w-3/5 mx-auto text-wrap">
                    <p className="text-lg text-void text-center">
                    With over 3 years in the industry, I have experience in both front-end and back-end design and development.
                    I love to learn new technologies and am always striving to stay up-to-date with the latest trends in the web development and computer science.
                    Some of my passions include spending time with my family, music, video games, the mountains, and of course, programming!
                    </p>
                    
                </div>
                
            {/* </div> */}
            {/* <Example /> */}
            <HoverSpring />

        </div>
    );
};
 
export default Home;