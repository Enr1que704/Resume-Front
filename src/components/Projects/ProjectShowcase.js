import  Card  from './Card';

const ProjectShowcase = (props) => {

    const projects = [
        {
            title: "Dota 2 Match Confirmer",
            description: "Created a python program that will automatically accept a match of Dota 2, and then send a text that the game is ready. This was done using pyautogui.",
            link: "https://github.com/Enr1que704/Dota-Match-Confirmer"
        }, 
        {
            title: "Baby Feeding Tracker",
            description: "Created simple web app to track baby feedings. Uses React, Node.js, Express, and Postgres.",
            link: "https://github.com/Enr1que704/lenore-Feeding-Tracker"
        }, 
        {
            title: "Dev Portfolio",
            description: "Created this site using React and Tailwind CSS.",
            link: "https://github.com/Enr1que704/Resume-Front"
        },
        {
            title: "Apex Legends Discord Bot",
            description: "Programmed a discord bot that allowed for users to check apex stats, map rotations, etc. Done using Javascript.",
            link: "https://github.com/Enr1que704/apex-discord-bot"
        }
    ]

    return (
        <div class="flex flex-wrap justify-center mt-10 p-10">
            {projects.map((project) => {
                return (
                    <Card project={project} />
                )
            })}
        </div>
    )
}

export default ProjectShowcase;