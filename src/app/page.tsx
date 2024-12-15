import { Circle, Square } from 'lucide-react'
import Link from 'next/link'
import MobileNav from '../components/MobileNav'

export default function Home() {
  const projects = [
    {
      title: "Automated Chatbot",
      description: "RAG-based chatbot with phi-3",
      link: "https://github.com/siddarthreddygsr/website-chatbot-integration"
    },
    {
      title: "Virtual Staging",
      description: "Flask backend with AWS S3",
      link: "https://virtualstagingwizard.com/"
    },
    {
      title: "TeethAPI",
      description: "GAN model for teeth straightening",
      link: "https://github.com/siddarthreddygsr/teethapi"
    }
  ]

  const now = new Date();
  const currentMonthYear = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  const [month, year] = currentMonthYear.split(' ');
  const formattedDate = `${year} ${month}`;

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      <nav className="fixed w-full top-0 bg-[#f2f2f2] border-b border-black/10 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Circle className="w-4 h-4" />
            <span className="text-sm">{formattedDate}</span>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-sm">
            <Link href="#about">about</Link>
            <Link href="#experience">experience</Link>
            <Link href="#projects">projects</Link>
            <a href="mailto:siddarthreddygsr@gmail.com" className="text-[#ff4400]">contact</a>
          </div>
          <MobileNav />
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl mb-8">Gurram Siddarth Reddy</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-base sm:text-lg mb-4">AI Engineer specializing in development and deployment of machine learning and backend applications.</p>
              <div className="flex gap-4 text-sm">
                <Square className="w-4 h-4 flex-shrink-0" />
                <span>Mahindra University, B.Tech in AI</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/siddarthreddygsr" className="block hover:text-[#ff4400]">github</a>
              <a href="https://www.linkedin.com/in/siddarthreddygsr/" className="block hover:text-[#ff4400]">linkedin</a>
              <a href="mailto:siddarthreddygsr@gmail.com" className="block hover:text-[#ff4400]">email</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 border-t border-black/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl mb-12">experience</h2>
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
              <div className="text-sm">
                <p>feb 2024 — nov 2024</p>
              </div>
              <div>
                <h3 className="text-lg mb-4">Backend Intern — Gocomet</h3>
                <ul className="space-y-2 text-sm">
                  <li>Built data integrations for shipment tracking</li>
                  <li>Developed Ruby data processing pipelines</li>
                  <li>Automated 25% of processes</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
              <div className="text-sm">
                <p>jul 2023 — aug 2023</p>
              </div>
              <div>
                <h3 className="text-lg mb-4">Intern — 5th Bridge Data Technologies</h3>
                <ul className="space-y-2 text-sm">
                  <li>Dockerized ML applications</li>
                  <li>Designed Flask APIs</li>
                  <li>Built real-time attack detection system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 border-t border-black/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl mb-12">projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="mb-4">
                  <Square className="w-8 h-8" />
                </div>
                <h3 className="text-lg mb-2 group-hover:text-[#ff4400]">{project.title}</h3>
                <p className="text-sm text-black/60">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 border-t border-black/10">
        <div className="container mx-auto max-w-4xl text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Circle className="w-4 h-4" />
            <span>Gurram Siddarth Reddy</span>
          </div>
          <a href="mailto:siddarthreddygsr@gmail.com" className="text-[#ff4400]">
            contact
          </a>
        </div>
      </footer>
    </main>
  )
}

