import Navigation from '@/react-app/components/Navigation';
import { Shield, Lock, Key, AlertTriangle, FileKey, Database, CheckCircle } from 'lucide-react';

const cryptographicFeatures = [
  {
    icon: Key,
    title: 'AEAD Encryption',
    description: 'Uses authenticated encryption with associated data (AEAD) primitives for maximum security.',
    details: [
      'ChaCha20Poly1305: Stream cipher with polynomial authenticator',
      'AES256-GCM: Block cipher with Galois/Counter Mode',
      'Both provide confidentiality and authenticity',
      'Prevents tampering and unauthorized modifications'
    ],
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Memory Protection',
    description: 'Advanced memory safety measures to protect sensitive data in RAM.',
    details: [
      'mlock: Prevents swapping to disk',
      'mprotect: Controls memory access permissions',
      'zeroize: Securely clears sensitive data',
      'Automatic credential expiry to limit exposure'
    ],
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: FileKey,
    title: 'Complete Obfuscation',
    description: 'All filesystem metadata is encrypted to prevent information leakage.',
    details: [
      'Filenames encrypted with deterministic encryption',
      'Directory structure completely hidden',
      'File sizes and timestamps encrypted',
      'Metadata indistinguishable from random data'
    ],
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Database,
    title: 'Chunked Architecture',
    description: 'Files encrypted in chunks for security and performance benefits.',
    details: [
      '256KB chunk size optimized for security',
      'Each chunk has unique encryption key',
      'Prevents correlation attacks on large files',
      'Enables secure password changes without re-encryption'
    ],
    color: 'from-yellow-400 to-orange-500'
  }
];

const securityPrinciples = [
  {
    title: 'Defense in Depth',
    description: 'Multiple layers of security protect against various attack vectors',
    points: [
      'Encryption at rest with strong ciphers',
      'Memory protection against cold boot attacks',
      'Secure key derivation with Argon2',
      'Constant-time operations prevent timing attacks'
    ]
  },
  {
    title: 'Zero Knowledge',
    description: 'The filesystem reveals no information without proper credentials',
    points: [
      'All data appears as random noise',
      'No distinguishable patterns in encrypted data',
      'Directory structure completely obfuscated',
      'File access patterns hidden from observers'
    ]
  },
  {
    title: 'Forward Secrecy',
    description: 'Compromised keys cannot decrypt previously secured data',
    points: [
      'Each chunk encrypted with derived keys',
      'Key rotation capabilities built-in',
      'Password changes invalidate old keys',
      'Time-based credential expiry'
    ]
  }
];

const threatModel = [
  {
    threat: 'Disk Theft/Loss',
    protection: 'Full encryption with strong ciphers',
    status: 'Protected',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    threat: 'Memory Dumps',
    protection: 'Memory locking and zeroization',
    status: 'Protected',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    threat: 'Cold Boot Attacks',
    protection: 'Credential expiry and memory protection',
    status: 'Protected',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    threat: 'Timing Attacks',
    protection: 'Constant-time cryptographic operations',
    status: 'Protected',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    threat: 'Side Channel Analysis',
    protection: 'Hardware-accelerated crypto when available',
    status: 'Mitigated',
    icon: AlertTriangle,
    color: 'text-yellow-400'
  },
  {
    threat: 'Quantum Computing',
    protection: 'Post-quantum cryptography (future)',
    status: 'Planned',
    icon: AlertTriangle,
    color: 'text-blue-400'
  }
];

const algorithmComparison = [
  {
    name: 'ChaCha20Poly1305',
    type: 'Stream Cipher + MAC',
    keySize: '256-bit',
    performance: 'Excellent on all platforms',
    security: 'High - Salsa20 family, Google designed',
    resistance: 'Side-channel resistant',
    advantages: [
      'Better performance on non-AES hardware',
      'Excellent SIMD implementation',
      'Constant-time by design',
      'No timing attacks possible'
    ]
  },
  {
    name: 'AES256-GCM',
    type: 'Block Cipher + GMAC',
    keySize: '256-bit',
    performance: 'Excellent with AES-NI',
    security: 'High - NIST approved standard',
    resistance: 'Hardware acceleration helps',
    advantages: [
      'AES-NI hardware acceleration',
      'Industry standard and well-studied',
      'FIPS 140-2 approved',
      'Wide hardware support'
    ]
  }
];

const bestPractices = [
  'Use strong, unique passwords for each encrypted filesystem',
  'Enable automatic credential expiry for enhanced security',
  'Regularly backup your encrypted data to prevent data loss',
  'Keep rencfs updated to receive security patches',
  'Use hardware-accelerated encryption when available',
  'Mount filesystems with minimal required permissions',
  'Unmount filesystems when not in active use',
  'Consider using key files in addition to passwords'
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent mb-6">
                Security
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Enterprise-grade security with modern cryptographic primitives and defense-in-depth architecture
              </p>
            </div>
          </div>
        </section>

        {/* Cryptographic Features */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Cryptographic Features</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {cryptographicFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
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

        {/* Security Principles */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Security Principles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {securityPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 mb-6">{principle.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {principle.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <Lock className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-200 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Model */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Threat Model & Protection</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threatModel.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.threat}</h3>
                      <span className={`text-sm ${item.color} font-medium`}>{item.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{item.protection}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Algorithm Comparison */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Encryption Algorithms</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {algorithmComparison.map((algo, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{algo.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-gray-400 text-sm">Type:</span>
                      <p className="text-white font-medium">{algo.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Key Size:</span>
                      <p className="text-white font-medium">{algo.keySize}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Performance:</span>
                      <p className="text-white font-medium">{algo.performance}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Security:</span>
                      <p className="text-white font-medium">{algo.security}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-gray-400 text-sm">Resistance:</span>
                    <p className="text-white font-medium mb-4">{algo.resistance}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Advantages:</h4>
                    <ul className="space-y-2">
                      {algo.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-200 text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Security Best Practices</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {bestPractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl">
                      <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
