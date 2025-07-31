import { useState } from 'react';
import { Link } from 'react-router';
import { Terminal, Download, Package, Container, Copy, Check, BookOpen, Users } from 'lucide-react';

const installMethods = [
  {
    id: 'cargo',
    title: 'Cargo Install',
    icon: Package,
    description: 'Install from crates.io',
    command: 'cargo install rencfs',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'aur',
    title: 'Arch AUR',
    icon: Download,
    description: 'Install from Arch User Repository',
    command: 'yay -S rencfs-bin',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: Container,
    description: 'Run with Docker container',
    command: 'docker pull xorio42/rencfs',
    color: 'from-blue-500 to-indigo-500'
  }
];

const usageExamples = [
  {
    title: 'Mount Encrypted Filesystem',
    description: 'Basic command to mount an encrypted directory',
    command: 'rencfs mount --mount-point /mnt/encrypted --data-dir /path/to/encrypted/data'
  },
  {
    title: 'Change Password',
    description: 'Change the encryption password without re-encrypting data',
    command: 'rencfs passwd --data-dir /path/to/encrypted/data'
  },
  {
    title: 'Custom Cipher',
    description: 'Specify encryption algorithm and log level',
    command: 'rencfs mount --cipher ChaCha20Poly1305 --log-level WARN --mount-point /mnt/secure --data-dir /data'
  }
];

export default function Usage() {
  const [activeTab, setActiveTab] = useState('cargo');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Getting Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Install rencfs and start encrypting your files in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/installation"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Installation Guide
            </Link>
            <Link 
              to="/documentation"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </Link>
            <Link 
              to="/community"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              <Users className="w-4 h-4" />
              Join Community
            </Link>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-8 mb-12 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-amber-200 mb-4 flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            Prerequisites
          </h3>
          <p className="text-amber-100 mb-4">
            FUSE3 is required to mount the encrypted filesystem. Install it first:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-2xl p-4 border border-amber-500/20">
              <p className="text-amber-200 font-mono text-sm mb-2"># Ubuntu/Debian</p>
              <code className="text-amber-100">sudo apt-get update && sudo apt-get -y install fuse3</code>
            </div>
            <div className="bg-black/30 rounded-2xl p-4 border border-amber-500/20">
              <p className="text-amber-200 font-mono text-sm mb-2"># Arch Linux</p>
              <code className="text-amber-100">sudo pacman -Syu && sudo pacman -S fuse3</code>
            </div>
          </div>
        </div>

        {/* Installation methods */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Installation Methods</h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {installMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveTab(method.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === method.id
                    ? 'bg-gradient-to-r ' + method.color + ' text-white shadow-2xl'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <method.icon className="w-5 h-5" />
                {method.title}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          {installMethods.map((method) => (
            <div
              key={method.id}
              className={`transition-all duration-500 ${
                activeTab === method.id ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{method.title}</h4>
                    <p className="text-gray-300">{method.description}</p>
                  </div>
                </div>

                <div className="bg-black/50 rounded-2xl p-6 border border-gray-700/50 relative group">
                  <code className="text-green-400 font-mono text-lg block">{method.command}</code>
                  <button
                    onClick={() => copyToClipboard(method.command)}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    {copiedCommand === method.command ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usage examples */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Usage Examples</h3>
          
          <div className="space-y-6">
            {usageExamples.map((example, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{example.title}</h4>
                <p className="text-gray-300 mb-4">{example.description}</p>
                
                <div className="bg-black/50 rounded-2xl p-6 border border-gray-700/50 relative group">
                  <code className="text-blue-400 font-mono block text-sm md:text-base break-all">
                    {example.command}
                  </code>
                  <button
                    onClick={() => copyToClipboard(example.command)}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    {copiedCommand === example.command ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Docker quickstart */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
              <Container className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Quick Docker Try</h3>
              <p className="text-blue-200">Test rencfs without installing dependencies</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-2xl p-4 border border-blue-500/20">
              <p className="text-blue-200 font-mono text-sm mb-2"># Pull the Docker image</p>
              <code className="text-blue-100">docker pull xorio42/rencfs</code>
            </div>
            <div className="bg-black/30 rounded-2xl p-4 border border-blue-500/20">
              <p className="text-blue-200 font-mono text-sm mb-2"># Start container with FUSE support</p>
              <code className="text-blue-100">docker run -v ~/Downloads:/share -it --device /dev/fuse --cap-add SYS_ADMIN --security-opt apparmor:unconfined xorio42/rencfs:latest /bin/sh</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
