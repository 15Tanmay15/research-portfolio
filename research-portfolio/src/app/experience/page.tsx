'use client';

export default function ExperiencePage() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div style={{maxWidth: '48rem', margin: '0 auto', padding: '0 1rem'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Professional Experience</h2>
          <p style={{marginTop: '0.75rem', fontSize: '1.125rem', color: '#6b7280'}} className="dark:text-gray-400">Career progression and key achievements</p>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {/* Experience Item 1 */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem'}} className="dark:border-gray-700">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem'}} className="sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Software Development Engineer II</h3>
                <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', backgroundColor: '#d1fae5', color: '#065f46', whiteSpace: 'nowrap'}} className="dark:bg-emerald-900/30 dark:text-emerald-300">
                  Jul 2023 – Aug 2025
                </span>
              </div>
              <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563'}} className="dark:text-gray-300">Navi Technologies, Bengaluru</p>
            </div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.625rem', color: '#374151', fontSize: '0.875rem'}} className="dark:text-gray-300">
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#10b981', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Promoted to SDE-II within 12 months for exceptional delivery and architectural contributions at leading fintech</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#10b981', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Architected scalable microservices (Java, Spring Boot, PostgreSQL, Redis, Kafka) powering USD 12–13M loan workflows</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#10b981', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Implemented Camunda-based decision automation supporting 1.5M+ active loans with ML-aligned data readiness</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#10b981', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Built high-throughput async pipelines leveraged by ML/NLP teams for predictive decisioning</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#10b981', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Awarded "Spearhead Award (2024)" for innovation, system design excellence, and cross-team leadership</span>
              </li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem'}} className="dark:border-gray-700">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem'}} className="sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Software Developer Intern</h3>
                <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', backgroundColor: '#dbeafe', color: '#1e40af', whiteSpace: 'nowrap'}} className="dark:bg-blue-900/30 dark:text-blue-300">
                  Jan 2023 – Jun 2023
                </span>
              </div>
              <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563'}} className="dark:text-gray-300">Magicpin, Gurgaon</p>
            </div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.625rem', color: '#374151', fontSize: '0.875rem'}} className="dark:text-gray-300">
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Built scalable Help & Support systems serving 10M+ users using Go, PHP, JavaScript, Redis</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Developed tree-based support architecture enabling NLP-based ticket classification integration</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Optimized Redis caching, significantly reducing latency for real-time classification and routing</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Designed modular APIs enabling analytics teams to build predictive workflows on customer interaction data</span>
              </li>
            </ul>
          </div>

          {/* Experience Item 3 */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem'}} className="dark:border-gray-700">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem'}} className="sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Teaching Assistant – Data Structures & Algorithms</h3>
                <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', backgroundColor: '#e9d5ff', color: '#6b21a8', whiteSpace: 'nowrap'}} className="dark:bg-purple-900/30 dark:text-purple-300">
                  May 2020 – Sep 2020
                </span>
              </div>
              <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563'}} className="dark:text-gray-300">Coding Ninjas, Gurgaon</p>
            </div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.625rem', color: '#374151', fontSize: '0.875rem'}} className="dark:text-gray-300">
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#a855f7', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Mentored 29+ students in problem-solving, recursion, DP, graph algorithms, and complexity analysis</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#a855f7', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Provided algorithmic debugging support, improving student performance in coding assessments</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#a855f7', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Earned instructor rating of 4.55/5 for clarity in explaining complex concepts and personalized guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
