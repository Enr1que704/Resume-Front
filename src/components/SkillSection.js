import { motion } from 'framer-motion'
import { FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { FaJava, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa'
// import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'Python',
    description: '3 years of experience with projects including the Django framework, web scraping, and data science.',
  },
  {
    id: 2,
    name: 'Java',
    description: '3 years of experience with projects including Conways Game of Life, and RESTful APIs using Spring Boot.',
  },
  {
    id: 3,
    name: 'TypeScript',
    description: '2 years of experience with full-stack applications including dynamic cloud forms and project version control using Node.js and Express.',
  },
  {
    id: 4,
    name: 'React',
    description: '1 year of experience with projects including this website and dynamic cloud forms.',
  },
  {
    id: 5,
    name: 'SQL',
    description: '3 years of experience with database design and implementation using MySQL, MSSQL, DB2 and PostgreSQL.',
  },
  {
    id: 6,
    name: 'Version Control',
    description: '3 years of experience with Git and GitHub for version control and project collaboration.',
  }
]

const HoverSpring = () => {
  return (
    <div className="flex justify-center items-center pt-10 pb-20">
      <div className="grid w-3/5 grid-cols-2 gap-x-10 md:grid-cols-4">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer">
                {/* <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  alt={project.name}
                /> */}
                
                <div className="mb-1 text-lg font-medium text-calgar-blue">
                  <span className="flex items-center">
                    {project.name === 'Python' && <FaPython className="mr-2" />}
                    {project.name === 'Java' && <FaJava className="mr-2" />}
                    {project.name === 'TypeScript' && <SiTypescript className="mr-2" />}
                    {project.name === 'React' && <FaReact className="mr-2" />}
                    {project.name === 'SQL' && <FaDatabase className="mr-2" />}
                    {project.name === 'Version Control' && <FaGitAlt className="mr-2" />}
                    {project.name}
                  </span>
                </div>
                <div className="max-w-[250px] text-md font-normal text-void">
                  {project.description}
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default HoverSpring