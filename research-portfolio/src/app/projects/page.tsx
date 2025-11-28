'use client';

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div style={{maxWidth: '48rem', margin: '0 auto', padding: '0 1rem'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Projects</h2>
          <p style={{marginTop: '0.75rem', fontSize: '1.125rem', color: '#6b7280'}} className="dark:text-gray-400">Notable projects and implementations</p>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {/* Project Item 1 */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem'}} className="dark:border-gray-700">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem'}} className="sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">GAN-Based Neural Fashion Designer</h3>
                <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', backgroundColor: '#fce7f3', color: '#be185d', whiteSpace: 'nowrap'}} className="dark:bg-pink-900/30 dark:text-pink-300">
                  B.Tech Major Project
                </span>
              </div>
              <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563'}} className="dark:text-gray-300">Delhi Technological University</p>
            </div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.625rem', color: '#374151', fontSize: '0.875rem'}} className="dark:text-gray-300">
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#ec4899', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Designed a Generative Adversarial Network (StyleGAN2-ADA) for generating fashion images using a dataset of 84,000+ samples.</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#ec4899', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Performed latent space exploration, image synthesis, augmentation, and attribute-level manipulation using PyTorch.</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#ec4899', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Created an interactive Gradio interface enabling preview, customization, and multi-angle visualization.</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#ec4899', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Conducted experiments on training stability, bias detection, and model regularization techniques.</span>
              </li>
            </ul>
          </div>

          {/* Project Item 2 */}
          <div style={{backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #e5e7eb'}} className="dark:bg-gray-800 dark:border-gray-700">
            <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem'}} className="dark:border-gray-700">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem'}} className="sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827'}} className="dark:text-white">Tabla to Drumset Generation</h3>
                <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', backgroundColor: '#dbeafe', color: '#1e40af', whiteSpace: 'nowrap'}} className="dark:bg-blue-900/30 dark:text-blue-300">
                  Music Information Retrieval
                </span>
              </div>
              <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563'}} className="dark:text-gray-300">Research Project</p>
            </div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.625rem', color: '#374151', fontSize: '0.875rem'}} className="dark:text-gray-300">
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Developed an end-to-end MIR pipeline integrating RCD onset detection, CNN-based stroke classification (97% accuracy), and a bar-aware LSTM for symbolic rhythm generation.</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Designed a real-time phrase-level inference API enabling interactive tabla–drum call-and-response translation.</span>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <span style={{color: '#3b82f6', marginRight: '0.625rem', marginTop: '0.25rem', fontWeight: 'bold'}}>•</span>
                <span>Optimised model training using GPU acceleration; achieved 97% classification accuracy.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
