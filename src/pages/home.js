import React from "react";
import { Header, Paragraph, Break } from "../styles/StyledComponents";
 
const Home = () => {
    return (
        <div>
            <Header>Eric's Resume</Header>
            <Break />
            <Paragraph>Welcome to Eric's Resume and Project showcase site. Here you can learn more about Eric, as well as his work experience,
                and projects he has worked on. Feel free to reach out to Eric if you have any questions or would like to learn more about his work.
            </Paragraph>
        </div>
    );
};
 
export default Home;