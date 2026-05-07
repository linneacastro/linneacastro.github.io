import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import linneaPhoto from './assets/linnea.png'

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cream text-bark">
      <img
        src={linneaPhoto}
        alt="Linnea Castro"
        className="w-40 h-40 rounded-full object-cover object-[50%_25%] mb-8 shadow-sm"
      />
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-4">
        Linnea Castro
      </h1>
      <p className="text-xl sm:text-2xl font-normal text-walnut mb-8">
        Site Reliability Engineer
      </p>
      <p className="max-w-xl text-base sm:text-lg leading-relaxed text-stone-warm">
        Engineering reliability into systems, AI workflows, and life.
      </p>
      <div className="flex gap-7 mt-10">
        <a
          href="https://github.com/linneacastro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-walnut hover:text-bark transition-colors"
        >
          <FiGithub className="w-6 h-6" strokeWidth={1.75} />
        </a>
        <a
          href="https://linkedin.com/in/linneacastro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-walnut hover:text-bark transition-colors"
        >
          <FiLinkedin className="w-6 h-6" strokeWidth={1.75} />
        </a>
        <a
          href="mailto:linneapaulina@gmail.com"
          aria-label="Email"
          className="text-walnut hover:text-bark transition-colors"
        >
          <FiMail className="w-6 h-6" strokeWidth={1.75} />
        </a>
      </div>
    </main>
  )
}

export default App
