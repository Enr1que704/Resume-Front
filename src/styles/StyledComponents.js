import styled from "styled-components";

export const Header = styled.h1`
    color: #333;
    font-size: 2.5em;
    text-align: center;
    padding: 0px;
`;

export const Paragraph = styled.p`
    color: #333;
    font-size: 1.5em;
    text-align: center;
    padding: 10px; // Add padding to the outline
    border-radius: 10px; // Add border-radius property to give curved edges
    margin: 20px auto;
    max-width: 75%; // Set the maximum width to 75% of the container
`;

export const Break = styled.hr`
    border: 0;
    height: 4px;
    background: #333;
    background-image: linear-gradient(to right, #ffffff, #454545, #ffffff);
    margin: 20px auto; // Center the hr horizontally using auto margin
    max-width: 50%; // Set the maximum width to 50% of the container
`;
