import Link from 'next/link';
import { EnvelopeIcon, AcademicCapIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Email</span>
            <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Google Scholar</span>
            <AcademicCapIcon className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <CodeBracketIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-500">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
