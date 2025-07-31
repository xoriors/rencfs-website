import { Code2, Lock, Shield, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const technologies = [
  {
    category: 'Runtime & FUSE',
    icon: Cpu,
    color: 'from-blue-400 to-cyan-500',
    items: [
      { name: 'Tokio', description: 'Async runtime for Rust', url: 'https://tokio.rs/' },
      { name: 'FUSE3', description: 'Filesystem in userspace', url: 'https://crates.io/crates/fuse3' }
    ]
  },
  {
    category: 'Cryptography',
    icon: Lock,
    color: 'from-green-400 to-emerald-500',
    items: [
      { name: 'Ring', description: 'Safe cryptographic primitives', url: 'https://crates.io/crates/ring' },
      { name: 'Argon2', description: 'Key derivation function', url: 'https://crates.io/crates/argon2' },
      { name: 'Blake3', description: 'Cryptographic hash function', url: 'https://crates.io/crates/blake3' }
    ]
  },
  {
    category: 'Security & Memory',
    icon: Shield,
    color: 'from-purple-400 to-pink-500',
    items: [
      { name: 'shush-rs', description: 'Safe memory handling for secrets', url: 'https://crates.io/crates/shush-rs' },
      { name: 'rand_chacha', description: 'ChaCha random number generator', url: 'https://crates.io/crates/rand_chacha' },
      { name: 'keyring', description: 'OS keyring integration', url: 'https://crates.io/crates/keyring' }
    ]
  },
  {
    category: 'Utilities',
    icon: Code2,
    color: 'from-yellow-400 to-orange-500',
    items: [
      { name: 'Tracing', description: 'Application-level tracing', url: 'https://crates.io/crates/tracing' },
      { name: 'Serde', description: 'Serialization framework', url: 'https://crates.io/crates/serde' }
    ]
  }
];

const cipherComparison = [
  {
    name: 'ChaCha20Poly1305',
    description: 'Default cipher, better SIMD performance',
    pros: ['Better on non-AES hardware', 'Excellent SIMD performance', 'Constant time'],
    color: 'from-purple-500 to-blue-500'
  },
  {
    name: 'AES256-GCM',
    description: 'Hardware accelerated on most CPUs',
    pros: ['AES-NI hardware acceleration', '1.28x faster on average', 'Industry standard'],
    color: 'from-green-500 to-teal-500'
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Built with modern, audited, and battle-tested technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/security"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              Security Details
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/performance"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              Performance Metrics
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Technologies grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{tech.category}</h3>
              </div>

              {/* Technology items */}
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                      </div>
                      <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cipher comparison */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Encryption Ciphers</h3>
            <p className="text-gray-300">Choose the cipher that best fits your hardware and use case</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cipherComparison.map((cipher, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cipher.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2">{cipher.name}</h4>
                  <p className="text-gray-300 mb-6">{cipher.description}</p>
                  
                  <div className="space-y-2">
                    {cipher.pros.map((pro, proIndex) => (
                      <div key={proIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${cipher.color} rounded-full`}></div>
                        <span className="text-gray-200 text-sm">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
