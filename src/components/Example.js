import { motion } from 'framer-motion'
// import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'syntaxUI',
    description: 'Ready-to-use UI elements designed for rapid development.',
    image: 'https://ansubkhan.com/images/projects/syntaxUI.svg',
  },
  {
    id: 2,
    name: 'Prettyfolio',
    description: 'A curated collection of portfolios for inspiration.',
    image: 'https://ansubkhan.com/images/projects/prettyfolio.png',
  },
  {
    id: 2,
    name: 'Enchant',
    description: 'A vibrant theme for Visual Studio Code.',
    image: 'https://ansubkhan.com/images/projects/enchant.png',
  },
  {
    id: 3,
    name: 'Ansubkhan.com',
    description: 'My personal website, blogs and newsletter.',
    image: 'https://ansubkhan.com/images/projects/portfolio.png',
  },
  {
    id: 4,
    name: 'Quote Vault',
    description: 'Social media, but for sharing quotes.',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
]

const HoverSpring = () => {
  return (
    <div className="flex justify-center items-center pt-10 pb-20">
      <div className="grid w-1/2 grid-cols-2 gap-x-10 md:grid-cols-3">
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
                  {project.name}
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