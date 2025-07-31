import { Shield, Zap, Lock, Database, Code, Users, AlertTriangle, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'AEAD cryptography primitives with ChaCha20Poly1305 and AES256-GCM encryption. All data, metadata, and filenames encrypted.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    description: 'Fast seek on reads and writes, parallel operations, and optimized for concurrency with Rust\'s async runtime.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Lock,
    title: 'Memory Safety',
    description: 'Credentials safely managed with mlock, mprotect, zeroize, and expiry to mitigate cold boot attacks.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Database,
    title: 'Chunked Encryption',
    description: 'Files encrypted in 256KB chunks for efficient operations. Change password without re-encrypting all data.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Modern Stack',
    description: 'Built with Tokio async runtime, FUSE3, Ring cryptography, and Argon2 key derivation functions.',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: Users,
    title: 'Developer Friendly',
    description: 'Use as CLI tool or library. Full concurrency support and abstraction layers for different platforms.',
    color: 'from-rose-400 to-red-500'
  }
];

const workInProgress = [
  'Data integrity with WAL (Write-Ahead Logging)',
  'Enhanced privacy - hide all metadata',
  'Unique nonce generation in offline mode',
  'File inode and chunk index to AAD',
  'Handle long file names',
  'Cross-platform abstraction layers'
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Built with security, performance, and developer experience in mind
          </p>
          <Link 
            to="/features"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            Explore All Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Work in Progress section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Work in Progress</h3>
              <p className="text-gray-300">Exciting features currently being developed</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {workInProgress.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
