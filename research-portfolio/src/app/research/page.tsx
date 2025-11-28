'use client';

import Section from '@/components/ui/Section';
import { Card, CardContent, CardFooter, CardBadge } from '@/components/ui/Card';
import { CodeBracketIcon, SparklesIcon, ChartBarIcon, CpuChipIcon, LightBulbIcon, BeakerIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const researchProjects = [
  {
    id: 'patent_001',
    title: 'AI-Based Cardiovascular Diagnostic Device',
    description: 'Patent Application (2025). Applicants: Prof. Dr. S. B. Goyal, Prof. Dr. Anand Singh Rajawat, Dr. Hayyan Nassar Waked, Tanmay Gupta, Dr. Neha Singhal. Design Registration / Patent Application.',
    icon: BeakerIcon,
    tags: [
      { name: 'Patent', variant: 'red' },
      { name: 'Medical AI', variant: 'blue' },
      { name: 'Healthcare', variant: 'green' }
    ],
    date: '2025',
    isPatent: true
  },
  {
    id: 'paper_001',
    title: 'Quantum-Driven Paradigms: Pioneering Artificial Intelligence Beyond Classical Borders',
    description: 'First Author. Achieved 78% energy efficiency improvement over classical AI models. Explores quantum-enhanced machine learning approaches.',
    icon: SparklesIcon,
    tags: [
      { name: 'Quantum AI', variant: 'purple' },
      { name: 'Machine Learning', variant: 'blue' }
    ],
    date: '2024'
  },
  {
    id: 'paper_002',
    title: 'Metaverse-Driven HR and Finance with Blockchain, AI, and Quantum Computing',
    description: 'Co-authored with S. B. Goyal, Anand Singh Rajawat, Shwetam Gupta, Kartik Abrol, Dhiraj Jadhav. MetaHRFin framework with 28% improved operational efficiency and 99.7% financial accuracy.',
    icon: CurrencyDollarIcon,
    tags: [
      { name: 'Metaverse', variant: 'blue' },
      { name: 'Blockchain', variant: 'purple' },
      { name: 'Enterprise', variant: 'green' }
    ],
    date: '2024'
  },
  {
    id: 'paper_003',
    title: 'Edge-AI and Quantum-Blockchain for Smart HR and Sustainable Finance',
    description: 'Co-authored with Aradeep Bedi, S. B. Goyal, Abhudaya Srivastava, Vinit Chaudhari. Reduced energy consumption by 67% and improved transaction processing speed by 89%.',
    icon: ChartBarIcon,
    tags: [
      { name: 'Edge AI', variant: 'blue' },
      { name: 'Quantum Security', variant: 'purple' },
      { name: 'Sustainability', variant: 'green' }
    ],
    date: '2023'
  },
  {
    id: 'paper_004',
    title: 'Cryptography-Driven Transfer Learning Models Based Malware Detection for Resilient IoT Security',
    description: 'Co-authored with Nitin Mukhi, Sangeeta Singh, Nirav Narendrakumar Modh, Chirag Soni, S. B. Goyal. Achieved 99.62% accuracy on Bot-IoT dataset using Dynamic Chaos Encryption and RNNs.',
    icon: ShieldCheckIcon,
    tags: [
      { name: 'Cybersecurity', variant: 'red' },
      { name: 'IoT', variant: 'blue' },
      { name: 'Transfer Learning', variant: 'green' }
    ],
    date: '2023'
  },
  {
    id: 'paper_005',
    title: 'Synergizing Quantum Logic and Neural Architectures: Crafting the Future of Intelligent Systems',
    description: 'Co-authored with Anand Singh Rajawat, Sardar M. N. Islam, S. B. Goyal. Hybrid quantum-classical architecture reducing computational complexity by 42%.',
    icon: CpuChipIcon,
    tags: [
      { name: 'Quantum Computing', variant: 'purple' },
      { name: 'Neural Networks', variant: 'blue' },
      { name: 'Optimization', variant: 'green' }
    ],
    date: '2023'
  },
  {
    id: 'paper_006',
    title: 'Deep Reinforcement Learning Based Predictive Model for Closed-Loop Supply Chain Optimization',
    description: 'Co-authored with Venkataraman Viswanathan, Mahamood Hussain Mirza, Divyaraj Singh Jatav, Nitin Mukhi, S. B. Goyal. Achieved MAPE of 4.12% and R² of 0.981 for supply chain forecasting.',
    icon: CodeBracketIcon,
    tags: [
      { name: 'Deep Learning', variant: 'blue' },
      { name: 'Supply Chain', variant: 'green' },
      { name: 'Optimization', variant: 'orange' }
    ],
    date: '2023'
  }
];

export default function ResearchPage() {
  return (
    <Section 
      id="research" 
      title="Research Highlights"
      subtitle="A selection of my most impactful research projects"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {researchProjects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col overflow-hidden">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug flex-1 pt-0.5">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <CardBadge 
                      key={tagIndex} 
                      variant={tag.variant as any}
                      className="text-xs"
                    >
                      {tag.name}
                    </CardBadge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {project.date}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
