import Navigation from '@/react-app/components/Navigation';
import { Shield, Zap, Lock, Database, Code, Users, AlertTriangle, Cpu, FileKey, Globe, Layers } from 'lucide-react';

const coreFeatures = [
  {
    icon: Shield,
    title: 'AEAD Cryptography',
    description: 'Uses ChaCha20Poly1305 and AES256-GCM for authenticated encryption with associated data (AEAD). All data, metadata, and filenames are encrypted.',
    details: [
      'ChaCha20Poly1305 (default) - Better SIMD performance',
      'AES256-GCM - Hardware accelerated on most CPUs',
      'Authenticated encryption prevents tampering',
      'Constant-time operations prevent timing attacks'
    ],
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed with parallel operations, fast seek on reads/writes, and efficient chunked encryption architecture.',
    details: [
      'Files encrypted in 256KB chunks for efficient operations',
      'Parallel encryption/decryption operations',
      'Fast random access to any part of files',
      'Minimal overhead compared to unencrypted filesystems'
    ],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Lock,
    title: 'Memory Safety',
    description: 'Secure credential management with mlock, mprotect, zeroize, and automatic expiry to prevent memory-based attacks.',
    details: [
      'Credentials locked in memory with mlock/mprotect',
      'Automatic zeroing of sensitive data with zeroize',
      'Protection against cold boot attacks',
      'Configurable credential expiry times'
    ],
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Database,
    title: 'Smart Chunking',
    description: 'Files are divided into encrypted chunks, enabling efficient operations and password changes without full re-encryption.',
    details: [
      '256KB chunk size optimized for performance',
      'Change passwords without re-encrypting data',
      'Efficient random access within files',
      'Minimal storage overhead'
    ],
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Modern Architecture',
    description: 'Built with Rust and modern libraries including Tokio async runtime, FUSE3, Ring cryptography, and Argon2 key derivation.',
    details: [
      'Tokio async runtime for high concurrency',
      'FUSE3 for Linux filesystem integration',
      'Ring cryptographic library for security',
      'Argon2 for secure password-based key derivation'
    ],
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: Users,
    title: 'Developer Friendly',
    description: 'Available as both CLI tool and library with comprehensive documentation and cross-platform abstraction layers.',
    details: [
      'CLI tool for direct usage',
      'Library crate for integration',
      'Comprehensive API documentation',
      'Cross-platform abstraction layers planned'
    ],
    color: 'from-rose-400 to-red-500'
  }
];

const securityFeatures = [
  {
    icon: FileKey,
    title: 'Filename Encryption',
    description: 'All filenames and directory names are encrypted to prevent information leakage.'
  },
  {
    icon: Globe,
    title: 'Metadata Protection',
    description: 'File metadata including sizes, timestamps, and attributes are encrypted.'
  },
  {
    icon: Layers,
    title: 'Directory Structure Obfuscation',
    description: 'The entire directory structure is hidden from unauthorized access.'
  }
];

const workInProgress = [
  'Data integrity with WAL (Write-Ahead Logging)',
  'Enhanced privacy - hide all metadata including file sizes',
  'Unique nonce generation in offline mode',
  'File inode and chunk index to AAD for additional security',
  'Handle long file names (>255 characters)',
  'Cross-platform abstraction layers for Windows and macOS',
  'Key rotation and versioning system',
  'Backup and recovery mechanisms'
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Features
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive security, performance, and usability features designed for modern encrypted filesystem needs
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Core Features</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-200 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-24 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Security Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work in Progress */}
        <section className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Roadmap & Future Features</h2>
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
      </main>
    </div>
  );
}
