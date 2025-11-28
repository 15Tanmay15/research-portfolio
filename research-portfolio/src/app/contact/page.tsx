'use client';

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div style={{maxWidth: '48rem', margin: '0 auto', padding: '0 1rem'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Get In Touch</h2>
          <p style={{marginTop: '0.75rem', fontSize: '1.125rem', color: '#6b7280'}} className="dark:text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem'}} className="md:grid-cols-1 sm:grid-cols-1">
          {/* Contact Info */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1.5rem'}} className="dark:text-white">Contact Information</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {/* Email */}
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1e40af', flexShrink: 0}}>
                  <svg style={{width: '1.25rem', height: '1.25rem'}} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <p style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem'}} className="dark:text-gray-400">Email</p>
                  <a href="mailto:tanmaygofficial@gmail.com" style={{color: '#374151', textDecoration: 'none'}} className="dark:text-gray-200 hover:text-blue-600">tanmaygofficial@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1e40af', flexShrink: 0}}>
                  <svg style={{width: '1.25rem', height: '1.25rem'}} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.742 1.367 1.948 2.573 1.206 1.206 2.014 1.688 2.573 1.948l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-6.607 0-12-5.393-12-12V3z"></path>
                  </svg>
                </div>
                <div>
                  <p style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem'}} className="dark:text-gray-400">Phone</p>
                  <a href="tel:+918287539949" style={{color: '#374151', textDecoration: 'none'}} className="dark:text-gray-200 hover:text-blue-600">+91 8287539949</a>
                </div>
              </div>

              {/* GitHub */}
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1e40af', flexShrink: 0}}>
                  <svg style={{width: '1.25rem', height: '1.25rem'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem'}} className="dark:text-gray-400">GitHub</p>
                  <a href="https://github.com/15Tanmay15" target="_blank" rel="noopener noreferrer" style={{color: '#374151', textDecoration: 'none'}} className="dark:text-gray-200 hover:text-blue-600">github.com/15Tanmay15</a>
                </div>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1.5rem'}} className="dark:text-white">About Me</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <p style={{color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6'}} className="dark:text-gray-300">
                I'm a Computer Science Researcher passionate about AI, Machine Learning, and Quantum Computing. Feel free to reach out for collaborations, research opportunities, or just to say hi!
              </p>
              <a href="mailto:tanmaygofficial@gmail.com" style={{display: 'inline-block', backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', textDecoration: 'none', fontWeight: '600', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.2s'}} className="hover:bg-blue-700">
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
