import Navigation from '@/react-app/components/Navigation';
import { Code, GitBranch, AlertTriangle, CheckCircle, Clock, Zap, Target } from 'lucide-react';

const currentStatus = [
  {
    category: 'Core Features',
    status: 'Stable',
    icon: CheckCircle,
    color: 'text-green-400',
    items: [
      'FUSE filesystem integration',
      'ChaCha20Poly1305 and AES256-GCM encryption',
      'File chunking and encryption',
      'Memory protection with mlock/mprotect',
      'Password-based key derivation with Argon2'
    ]
  },
  {
    category: 'Performance',
    status: 'Optimized',
    icon: Zap,
    color: 'text-yellow-400',
    items: [
      'Async I/O with Tokio runtime',
      'Parallel chunk processing',
      'Fast seek operations',
      'Hardware-accelerated encryption',
      'Minimal overhead design'
    ]
  },
  {
    category: 'Security',
    status: 'Hardened',
    icon: CheckCircle,
    color: 'text-green-400',
    items: [
      'AEAD encryption with authentication',
      'Secure credential management',
      'Filename and metadata encryption',
      'Constant-time operations',
      'Memory safety with Rust'
    ]
  }
];

const developmentRoadmap = [
  {
    phase: 'Phase 1: Core Stability',
    status: 'Completed',
    timeframe: 'Q1-Q2 2024',
    icon: CheckCircle,
    color: 'from-green-400 to-emerald-500',
    items: [
      'Basic FUSE filesystem implementation',
      'Core encryption/decryption functionality',
      'Memory safety and security hardening',
      'Initial performance optimizations',
      'Command-line interface'
    ]
  },
  {
    phase: 'Phase 2: Enhanced Features',
    status: 'In Progress',
    timeframe: 'Q3-Q4 2024',
    icon: Clock,
    color: 'from-yellow-400 to-orange-500',
    items: [
      'Write-Ahead Logging (WAL) for data integrity',
      'Enhanced metadata privacy features',
      'Improved error handling and recovery',
      'Performance benchmarking and optimization',
      'Extended platform testing'
    ]
  },
  {
    phase: 'Phase 3: Advanced Security',
    status: 'Planned',
    timeframe: 'Q1-Q2 2025',
    icon: Target,
    color: 'from-blue-400 to-purple-500',
    items: [
      'Unique nonce generation for offline mode',
      'File inode and chunk index in AAD',
      'Long filename support (>255 characters)',
      'Key rotation and versioning system',
      'Post-quantum cryptography research'
    ]
  },
  {
    phase: 'Phase 4: Cross-Platform',
    status: 'Future',
    timeframe: '2025-2026',
    icon: Target,
    color: 'from-purple-400 to-pink-500',
    items: [
      'Windows support with WinFsp',
      'macOS support with macFUSE',
      'Mobile platform considerations',
      'Cloud integration capabilities',
      'GUI applications and tools'
    ]
  }
];

const activeDevelopment = [
  {
    feature: 'Write-Ahead Logging (WAL)',
    priority: 'High',
    description: 'Implement WAL for crash recovery and data integrity guarantees',
    progress: 75,
    estimatedCompletion: 'Q4 2024'
  },
  {
    feature: 'Metadata Privacy Enhancement',
    priority: 'High',
    description: 'Hide file sizes and access patterns from filesystem observers',
    progress: 45,
    estimatedCompletion: 'Q1 2025'
  },
  {
    feature: 'Offline Mode Improvements',
    priority: 'Medium',
    description: 'Better handling of unique nonce generation when offline',
    progress: 30,
    estimatedCompletion: 'Q1 2025'
  },
  {
    feature: 'Long Filename Support',
    priority: 'Medium',
    description: 'Support for filenames longer than 255 characters',
    progress: 20,
    estimatedCompletion: 'Q2 2025'
  },
  {
    feature: 'Cross-Platform Abstractions',
    priority: 'Low',
    description: 'Platform abstraction layers for Windows and macOS support',
    progress: 10,
    estimatedCompletion: 'Q3 2025'
  }
];

const technicalChallenges = [
  {
    challenge: 'Write-Ahead Logging Implementation',
    difficulty: 'High',
    description: 'Implementing crash-safe WAL while maintaining performance and security',
    approaches: [
      'Journal-based approach with encrypted log entries',
      'Atomic operations for critical filesystem metadata',
      'Recovery procedures for incomplete transactions',
      'Performance optimization for log replay'
    ]
  },
  {
    challenge: 'Metadata Privacy',
    difficulty: 'Medium',
    description: 'Hiding file sizes and access patterns without sacrificing usability',
    approaches: [
      'Padding files to hide true sizes',
      'Dummy I/O operations to obscure access patterns',
      'Configurable privacy levels',
      'Performance impact analysis and mitigation'
    ]
  },
  {
    challenge: 'Cross-Platform Compatibility',
    difficulty: 'High',
    description: 'Abstracting filesystem operations across different operating systems',
    approaches: [
      'Common trait definitions for filesystem operations',
      'Platform-specific implementations',
      'Unified testing framework',
      'Documentation for platform differences'
    ]
  }
];

const contributionGuidelines = [
  {
    area: 'Code Contributions',
    requirements: [
      'Rust experience (intermediate level recommended)',
      'Understanding of filesystem concepts',
      'Basic cryptography knowledge',
      'Linux development environment'
    ],
    process: [
      'Fork the repository on GitHub',
      'Create a feature branch for your changes',
      'Write tests for new functionality',
      'Ensure all tests pass and code is formatted',
      'Submit a pull request with detailed description'
    ]
  },
  {
    area: 'Testing & QA',
    requirements: [
      'Linux experience (various distributions)',
      'Understanding of filesystem usage patterns',
      'Ability to reproduce and document bugs',
      'Basic command-line proficiency'
    ],
    process: [
      'Test new features on different platforms',
      'Report bugs with detailed reproduction steps',
      'Verify bug fixes and regressions',
      'Contribute to test automation'
    ]
  },
  {
    area: 'Documentation',
    requirements: [
      'Technical writing skills',
      'Understanding of target audience',
      'Basic Git and Markdown knowledge',
      'Attention to detail and accuracy'
    ],
    process: [
      'Identify documentation gaps or improvements',
      'Write clear, concise, and accurate content',
      'Review and update existing documentation',
      'Ensure examples work as described'
    ]
  }
];

const releaseProcess = [
  {
    step: 'Development',
    description: 'Feature development and testing in feature branches',
    duration: 'Ongoing'
  },
  {
    step: 'Integration Testing',
    description: 'Comprehensive testing across supported platforms',
    duration: '1-2 weeks'
  },
  {
    step: 'Security Review',
    description: 'Code review with focus on security implications',
    duration: '1 week'
  },
  {
    step: 'Performance Testing',
    description: 'Benchmarking and performance regression testing',
    duration: '3-5 days'
  },
  {
    step: 'Release Candidate',
    description: 'RC build for community testing and feedback',
    duration: '1-2 weeks'
  },
  {
    step: 'Final Release',
    description: 'Tagged release with updated documentation',
    duration: '1 day'
  }
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
                Development
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Active development status, roadmap, and contribution opportunities for rencfs
              </p>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Current Status</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {currentStatus.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.category}</h3>
                      <span className={`text-sm font-medium ${category.color}`}>{category.status}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Roadmap */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Development Roadmap</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {developmentRoadmap.map((phase, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`font-medium ${phase.status === 'Completed' ? 'text-green-400' : phase.status === 'In Progress' ? 'text-yellow-400' : 'text-blue-400'}`}>
                          {phase.status}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{phase.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Development */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Active Development</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {activeDevelopment.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{feature.feature}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          feature.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                          feature.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {feature.priority} Priority
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-white font-bold">{feature.progress}%</div>
                      <div className="text-gray-400 text-xs">{feature.estimatedCompletion}</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${feature.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Technical Challenges</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {technicalChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className={`w-6 h-6 ${challenge.difficulty === 'High' ? 'text-red-400' : 'text-yellow-400'}`} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{challenge.challenge}</h3>
                      <span className={`text-sm font-medium ${challenge.difficulty === 'High' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {challenge.difficulty} Difficulty
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{challenge.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Approaches:</h4>
                    <ul className="space-y-2">
                      {challenge.approaches.map((approach, approachIndex) => (
                        <li key={approachIndex} className="flex items-start gap-3">
                          <Code className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-200 text-sm">{approach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Release Process */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Release Process</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {releaseProcess.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{step.step}</h3>
                      <p className="text-gray-300 text-sm mb-1">{step.description}</p>
                      <span className="text-blue-300 text-xs font-medium">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Guidelines */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Contribution Guidelines</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {contributionGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-6">{guideline.area}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {guideline.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-200 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Process:</h4>
                    <ul className="space-y-2">
                      {guideline.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <GitBranch className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-200 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
