import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import {
  SiGooglecloud,
  SiKubernetes,
  SiHelm,
  SiArgo,
  SiTerraform,
  SiVault,
  SiGrafana,
  SiGit,
  SiJson,
  SiPython,
  SiGnubash,
  SiYaml,
  SiC,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from 'react-icons/si'
import { FaAws, FaDatabase } from 'react-icons/fa'
import { TbBrandAzure } from 'react-icons/tb'
import linneaPhoto from './assets/linnea.png'

const skillGroups = [
  {
    name: 'Cloud & Container Orchestration',
    skills: [
      { label: 'AWS', icon: FaAws, color: '#FF9900' },
      { label: 'Azure', icon: TbBrandAzure, color: '#0078D4' },
      { label: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
      { label: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { label: 'Helm', icon: SiHelm, color: '#0F1689' },
      { label: 'Argo CD', icon: SiArgo, color: '#EF7B4D' },
      { label: 'Argo Workflows', icon: SiArgo, color: '#EF7B4D' },
    ],
  },
  {
    name: 'Infrastructure as Code & Observability',
    skills: [
      { label: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
      { label: 'GitOps', icon: SiGit, color: '#F05032' },
      { label: 'HashiCorp Vault', icon: SiVault, color: '#FFEC6E' },
      { label: 'Grafana', icon: SiGrafana, color: '#F46800' },
      { label: 'Jsonnet', icon: SiJson, color: '#000000' },
      { label: 'Grafonnet', icon: SiGrafana, color: '#F46800' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { label: 'Python', icon: SiPython, color: '#3776AB' },
      { label: 'Bash', icon: SiGnubash, color: '#4EAA25' },
      { label: 'YAML', icon: SiYaml, color: '#CB171E' },
      { label: 'C', icon: SiC, color: '#A8B9CC' },
      { label: 'SQL', icon: FaDatabase, color: '#4479A1' },
      { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    name: 'Data Science & ML',
    skills: [
      { label: 'pandas', icon: SiPandas, color: '#150458' },
      { label: 'NumPy', icon: SiNumpy, color: '#013243' },
      { label: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
    ],
  },
]

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', date: 'Jan 2025' },
  { name: 'CodePath Applied AI Engineering', date: 'Apr 2026' },
]

function App() {
  return (
    <div className="bg-cream text-bark min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-walnut/15">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="text-lg font-semibold tracking-tight hover:text-walnut transition-colors">
              Linnea Castro
            </a>
            <div className="hidden sm:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-walnut hover:text-bark transition-colors">About</a>
              <a href="#projects" className="text-sm font-medium text-walnut hover:text-bark transition-colors">Projects</a>
              <a href="#skills" className="text-sm font-medium text-walnut hover:text-bark transition-colors">Skills</a>
              <a href="#connect" className="text-sm font-medium text-walnut hover:text-bark transition-colors">Connect</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 scroll-mt-16">
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
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/linneacastro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-16 h-16 rounded-full bg-white border border-walnut/10 flex items-center justify-center text-walnut hover:text-bark hover:shadow-md transition-all"
            >
              <FiGithub className="w-7 h-7" strokeWidth={1.75} />
            </a>
            <a
              href="https://linkedin.com/in/linneacastro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-16 h-16 rounded-full bg-white border border-walnut/10 flex items-center justify-center text-walnut hover:text-bark hover:shadow-md transition-all"
            >
              <FiLinkedin className="w-7 h-7" strokeWidth={1.75} />
            </a>
            <a
              href="mailto:linneapaulina@gmail.com"
              aria-label="Email"
              className="w-16 h-16 rounded-full bg-white border border-walnut/10 flex items-center justify-center text-walnut hover:text-bark hover:shadow-md transition-all"
            >
              <FiMail className="w-7 h-7" strokeWidth={1.75} />
            </a>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 scroll-mt-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-bark mb-8">About</h2>
            <div className="space-y-5 text-lg leading-relaxed text-stone-warm">
              <p>
                I'm an SRE — the engineer who keeps production calm. The instrumentation, the runbooks, the pattern-recognition that turns a 2am page into a 5-minute fix. It's high-leverage work, and I'm good at it.
              </p>
              <p>
                I'm finishing my CS degree at WSU on the side, and lately I've been pointing the same reliability instincts at AI workflows. The skills travel.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 scroll-mt-16 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-bark mb-14 text-center">Skills</h2>
            <div className="space-y-12">
              {skillGroups.map((group) => (
                <div key={group.name}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-walnut/70 mb-6">
                    {group.name}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <div
                          key={skill.label}
                          style={{ '--brand': skill.color }}
                          className="group aspect-square flex flex-col items-center justify-center gap-2 rounded-xl bg-white border border-walnut/10 hover:shadow-md transition-all p-3"
                        >
                          <Icon className="w-[22px] h-[22px] text-walnut group-hover:text-[var(--brand)] transition-colors" />
                          <span className="text-xs font-medium text-stone-warm text-center leading-tight">
                            {skill.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-walnut/15">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-walnut/70 mb-6">
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-base text-stone-warm">
                    {cert.name}
                    <span className="text-walnut/60 ml-2">— {cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="connect" className="min-h-screen flex flex-col justify-center items-center px-6 scroll-mt-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-bark mb-8">Connect</h2>
            <p className="text-lg leading-relaxed text-stone-warm mb-12">
              Reach out to collaborate or get in touch.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/linneacastro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-16 h-16 rounded-full bg-white border border-walnut/10 flex items-center justify-center text-walnut hover:text-bark hover:shadow-md transition-all"
              >
                <FiGithub className="w-7 h-7" strokeWidth={1.75} />
              </a>
              <a
                href="https://linkedin.com/in/linneacastro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-16 h-16 rounded-full bg-white border border-walnut/10 flex items-center justify-center text-walnut hover:text-bark hover:shadow-md transition-all"
              >
                <FiLinkedin className="w-7 h-7" strokeWidth={1.75} />
              </a>
              <a
                href="mailto:linneapaulina@gmail.com"
                aria-label="Email"
                className="w-16 h-16 rounded-full bg-white border border-walnut/10 flex items-center justify-center text-walnut hover:text-bark hover:shadow-md transition-all"
              >
                <FiMail className="w-7 h-7" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
