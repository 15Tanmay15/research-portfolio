'use client';

import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  CodeBracketIcon, 
  ArrowDownIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  TrophyIcon,
  LightBulbIcon,
  BookmarkIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardFooter, CardBadge } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Skip to content link for accessibility */}
      <a href="#research" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl md:text-7xl tracking-tight">
              <span className="block">Tanmay Gupta</span>
              <span className="block text-blue-600 dark:text-blue-400">Computer Science Researcher</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl leading-relaxed">
              Passionate about advancing the field of Artificial Intelligence through innovative research in Machine Learning, Natural Language Processing, and Computer Vision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                as={Link}
                href="/research"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                icon={<BookOpenIcon className="h-5 w-5" />}
              >
                View My Research
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                iconPosition="right"
                icon={<ArrowDownIcon className="h-5 w-5" />}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#research" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" aria-label="Scroll down to see more">
            <span className="sr-only">Scroll down</span>
            <svg className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', letterSpacing: '-0.02em'}} className="dark:text-white">Education</h2>
            <p style={{marginTop: '1rem', fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.75'}} className="dark:text-gray-400">Academic background and achievements</p>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '48rem', margin: '0 auto'}}>
            {/* Education Item 1 */}
            <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb', transition: 'all 0.3s ease'}} className="dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1">
              <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem'}} className="dark:border-gray-700">
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem'}} className="sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">B.Tech in Computer Science Engineering</h3>
                  <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', backgroundColor: '#dbeafe', color: '#1e40af', whiteSpace: 'nowrap'}} className="dark:bg-blue-900/30 dark:text-blue-300">
                    2019 – 2023
                  </span>
                </div>
                <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563'}} className="dark:text-gray-300">Delhi Technological University (DTU)</p>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem'}}>
                <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '0.625rem', paddingRight: '0.625rem', paddingTop: '0.25rem', paddingBottom: '0.25rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600', backgroundColor: '#dcfce7', color: '#166534'}} className="dark:bg-green-900/30 dark:text-green-300">
                  CGPA: 8.02/10
                </span>
              </div>
              <div style={{color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.5'}} className="dark:text-gray-300">
                <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Relevant Coursework:</p>
                <p>Machine Learning, Artificial Intelligence, Data Mining, Probability & Statistics, Operating Systems, Computer Networks, Algorithms, Distributed Computing, Cloud Computing, DBMS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 md:py-24 bg-white dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', letterSpacing: '-0.02em'}} className="dark:text-white">Research Highlights</h2>
            <p style={{marginTop: '1rem', fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.75'}} className="dark:text-gray-400">A selection of my most impactful research projects</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Patent */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg flex items-center justify-center">
                    <BeakerIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug flex-1 pt-0.5">
                    AI-Based Cardiovascular Diagnostic Device
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  Patent Application (2025). Applicants: Prof. Dr. S. B. Goyal, Prof. Dr. Anand Singh Rajawat, Dr. Hayyan Nassar Waked, Tanmay Gupta, Dr. Neha Singhal.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <CardBadge variant="danger" className="text-xs">Patent</CardBadge>
                  <CardBadge variant="primary" className="text-xs">Medical AI</CardBadge>
                </div>
              </CardContent>
              <CardFooter className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <div className="text-sm text-gray-500 dark:text-gray-400">2025</div>
              </CardFooter>
            </Card>

            {/* Paper 1 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg flex items-center justify-center">
                    <BookOpenIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug flex-1 pt-0.5">
                    Quantum-Driven Paradigms: Pioneering AI Beyond Classical Borders
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  First Author. Achieved 78% energy efficiency improvement over classical AI models.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <CardBadge variant="primary" className="text-xs">Quantum AI</CardBadge>
                  <CardBadge variant="success" className="text-xs">ML</CardBadge>
                </div>
              </CardContent>
              <CardFooter className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <div className="text-sm text-gray-500 dark:text-gray-400">2024</div>
              </CardFooter>
            </Card>

            {/* Paper 2 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg flex items-center justify-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug flex-1 pt-0.5">
                    Metaverse-Driven HR and Finance with Blockchain, AI, and Quantum Computing
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  MetaHRFin framework with 28% improved operational efficiency and 99.7% financial accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <CardBadge variant="primary" className="text-xs">Metaverse</CardBadge>
                  <CardBadge variant="success" className="text-xs">Blockchain</CardBadge>
                </div>
              </CardContent>
              <CardFooter className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <div className="text-sm text-gray-500 dark:text-gray-400">2024</div>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button
              as={Link}
              href="/research"
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              View All Research
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', letterSpacing: '-0.02em'}} className="dark:text-white">Professional Experience</h2>
            <p style={{marginTop: '1rem', fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.75'}} className="dark:text-gray-400">My professional journey and roles</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Experience 1 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight flex-1">
                    Software Development Engineer
                  </h3>
                </div>
                <div className="mb-4 flex-1">
                  <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold mb-1">Navi Technologies</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Full-time | Jun 2023 – Present</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <CardBadge variant="primary" className="text-xs">Python</CardBadge>
                  <CardBadge variant="success" className="text-xs">ML</CardBadge>
                </div>
              </CardContent>
            </Card>

            {/* Experience 2 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight flex-1">
                    Software Development Engineer Intern
                  </h3>
                </div>
                <div className="mb-4 flex-1">
                  <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold mb-1">Magicpin</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Internship | Jan 2023 – May 2023</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <CardBadge variant="primary" className="text-xs">ML</CardBadge>
                  <CardBadge variant="success" className="text-xs">NLP</CardBadge>
                </div>
              </CardContent>
            </Card>

            {/* Experience 3 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight flex-1">
                    Teaching Assistant
                  </h3>
                </div>
                <div className="mb-4 flex-1">
                  <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold mb-1">Coding Ninjas</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Part Time | Aug 2022 – Dec 2022</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <CardBadge variant="primary" className="text-xs">Teaching</CardBadge>
                  <CardBadge variant="success" className="text-xs">DSA</CardBadge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button
              as={Link}
              href="/experience"
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              View Full Experience
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 pb-8 md:pb-12 bg-white dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', letterSpacing: '-0.02em'}} className="dark:text-white">Projects</h2>
            <p style={{marginTop: '1rem', fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.75'}} className="dark:text-gray-400">Notable projects and implementations</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-pink-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg flex items-center justify-center">
                    <CodeBracketIcon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug flex-1 pt-0.5">
                    GAN-Based Neural Fashion Designer
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  StyleGAN2-ADA for generating fashion images using 84,000+ samples with latent space exploration and interactive Gradio interface.
                </p>
                <div className="flex flex-wrap gap-2">
                  <CardBadge variant="primary" className="text-xs">GAN</CardBadge>
                  <CardBadge variant="success" className="text-xs">PyTorch</CardBadge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg flex items-center justify-center">
                    <CodeBracketIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug flex-1 pt-0.5">
                    Tabla to Drumset Generation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  End-to-end MIR pipeline with CNN-based stroke classification (97% accuracy) and real-time phrase-level inference API.
                </p>
                <div className="flex flex-wrap gap-2">
                  <CardBadge variant="primary" className="text-xs">MIR</CardBadge>
                  <CardBadge variant="success" className="text-xs">LSTM</CardBadge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button
              as={Link}
              href="/projects"
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-white font-bold text-lg mb-2">Tanmay Gupta</h3>
              <p className="text-sm text-gray-400">Computer Science Researcher & AI Specialist</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/research" className="text-gray-400 hover:text-blue-400 transition-colors">Research</Link></li>
                <li><Link href="/experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:tanmaygofficial@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors inline-block">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow</h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 Tanmay Gupta. All rights reserved.</p>
              <p className="mt-4 md:mt-0">Designed & Built with <span className="text-blue-400">React</span> & <span className="text-blue-400">Next.js</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

