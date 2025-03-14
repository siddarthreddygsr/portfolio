import { Hexagon, Minus, Cpu, Square, Triangle } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react';
import MobileNav from '../components/MobileNav'
import ThemeToggle from '../components/ThemeToggle'
import CustomModal from '../components/Modal';


export default function Home() {
  const projects = [
    {
      title: "Automated Chatbot",
      description: [
        "RAG-based chatbot with phi-3",
        "Seamless integration with existing platforms"
      ],
      link: "https://github.com/siddarthreddygsr/website-chatbot-integration"
    },
    {
      title: "Virtual Staging",
      description: [
        "Flask backend with AWS S3",
        "Real-time image processing and rendering"
      ],
      link: "https://virtualstagingwizard.com/"
    },
    {
      title: "TeethAPI",
      description: [
        "GAN model for teeth straightening",
        "High-performance image analysis and transformation"
      ],
      link: "https://github.com/siddarthreddygsr/teethapi"
    }
  ]

  const now = new Date();
  const currentMonthYear = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  const [month, year] = currentMonthYear.split(' ');
  const formattedDate = `${year} ${month}`;

  return (
    <main className="min-h-screen bg-[var(--background-color)] text-[var(--font-color)]">
      <Suspense>
        <CustomModal />
      </Suspense>
      <nav className="fixed w-full top-0 bg-[var(--background-color)] border-b border-[var(--font-color)]/10 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Hexagon className="w-4 h-4" />
            <span className="text-sm">{formattedDate}</span>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-sm">
            <Link href="#about">about</Link>
            <Link href="#experience">experience</Link>
            <Link href="#projects">projects</Link>
            <a href="mailto:siddarthreddygsr@gmail.com" className="text-[var(--accent-color)]">contact</a>
          </div>
          <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNav />
          </div>
        </div>
      </nav>


      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 gas-font text-[var(--accent-color)]">GURRAM SIDDARTH REDDY</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-base sm:text-lg mb-4">AI Engineer specializing in development and deployment of machine learning and backend applications.</p>
              <div className="flex gap-4 text-sm">
                <Cpu className="w-5 h-5 flex-shrink-0 text-[var(--accent-color)]" />
                <span>Machine Learning Engineer, Duodecimal</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/siddarthreddygsr" className="block hover:text-[var(--accent-color)]">github</a>
              <a href="https://www.linkedin.com/in/siddarthreddygsr/" className="block hover:text-[var(--accent-color)]">linkedin</a>
              <a href="mailto:siddarthreddygsr@gmail.com" className="block hover:text-[var(--accent-color)]">email</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl mb-12">experience_</h2>
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
              <div className="text-sm">
                <p>nov 2024 — present</p>
              </div>
              <div>
                <h3 className="text-lg mb-4">Machine Learning Engineer — Duodecimal</h3>
                <ul className="space-y-2 text-sm font-mono">
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Developing and deploying machine learning models</span>
                  </li>
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Optimizing AI algorithms for production environments</span>
                  </li>
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Collaborating on cutting-edge AI research projects</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
              <div className="text-sm">
                <p>feb 2024 — nov 2024</p>
              </div>
              <div>
                <h3 className="text-lg mb-4">Backend Intern — Gocomet</h3>
                <ul className="space-y-2 text-sm">
                <ul className="space-y-2 text-sm font-mono">
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Built data integrations for shipment tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Developed Ruby data processing pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Automated 25% of processes</span>
                  </li>
                </ul>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
              <div className="text-sm">
                <p>jul 2023 — aug 2023</p>
              </div>
              <div>
                <h3 className="text-lg mb-4">Intern — 5th Bridge Data Technologies</h3>
                <ul className="space-y-2 text-sm font-mono">
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Dockerized ML applications</span>
                  </li>
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Designed Flask APIs</span>
                  </li>
                  <li className="flex items-start">
                    <Square className="w-3 h-3 mr-2 mt-1 text-[var(--accent-color)]" />
                    <span>Built real-time attack detection system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl mb-12">projects_</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="group rounded-lg block p-4 border bg-[var(--background-color)] border-[var(--font-color)]/10 hover:border-[var(--accent-color)] transition-colors duration-300"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Triangle className="w-4 h-4 text-[var(--accent-color)]" />
                  <span className="text-sm text-[var(--font-color)]/60">{`0${index + 1}`}</span>
                </div>
                <h3 className="text-lg mb-4 group-hover:text-[var(--accent-color)]">{project.title}</h3>
                <ul className="space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <Minus className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[var(--accent-color)]" />
                      <span className="text-sm text-[var(--font-color)]/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 border-t border-[var(--font-color)]/10">
        <div className="container mx-auto max-w-4xl text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Hexagon className="w-4 h-4" />
            <span>Gurram Siddarth Reddy</span>
          </div>
          <a href="mailto:siddarthreddygsr@gmail.com" className="text-[var(--accent-color)]">
            contact
          </a>
        </div>
      </footer>
    </main>
  )
}

