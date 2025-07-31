import Navigation from '@/react-app/components/Navigation';
import { useState } from 'react';
import { Terminal, Download, Package, Container, Copy, Check, AlertTriangle, ExternalLink, Github } from 'lucide-react';

const installMethods = [
  {
    id: 'cargo',
    title: 'Cargo Install',
    icon: Package,
    description: 'Install from crates.io (recommended)',
    command: 'cargo install rencfs',
    color: 'from-orange-400 to-red-500',
    requirements: ['Rust toolchain installed', 'FUSE3 development libraries'],
    url: 'https://crates.io/crates/rencfs'
  },
  {
    id: 'aur',
    title: 'Arch AUR',
    icon: Download,
    description: 'Install from Arch User Repository',
    command: 'yay -S rencfs-bin',
    color: 'from-blue-400 to-cyan-500',
    requirements: ['AUR helper (yay, paru, etc.)', 'Arch Linux or Manjaro'],
    url: 'https://aur.archlinux.org/packages/rencfs-bin/'
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: Container,
    description: 'Run with Docker container',
    command: 'docker pull xorio42/rencfs',
    color: 'from-blue-500 to-indigo-500',
    requirements: ['Docker installed', 'FUSE support enabled'],
    url: 'https://hub.docker.com/r/xorio42/rencfs'
  },
  {
    id: 'source',
    title: 'From Source',
    icon: Github,
    description: 'Build from GitHub source',
    command: 'git clone https://github.com/xoriors/rencfs.git && cd rencfs && cargo build --release',
    color: 'from-purple-400 to-pink-500',
    requirements: ['Rust toolchain', 'Git', 'FUSE3 development libraries'],
    url: 'https://github.com/xoriors/rencfs'
  }
];

const prerequisites = [
  {
    os: 'Ubuntu/Debian',
    commands: [
      'sudo apt-get update',
      'sudo apt-get install -y fuse3 libfuse3-dev'
    ]
  },
  {
    os: 'Arch Linux',
    commands: [
      'sudo pacman -Syu',
      'sudo pacman -S fuse3'
    ]
  },
  {
    os: 'Fedora',
    commands: [
      'sudo dnf update',
      'sudo dnf install fuse3 fuse3-devel'
    ]
  },
  {
    os: 'CentOS/RHEL',
    commands: [
      'sudo yum update',
      'sudo yum install fuse3 fuse3-devel'
    ]
  }
];

const usageExamples = [
  {
    title: 'Basic Mount',
    description: 'Mount an encrypted filesystem with default settings',
    command: 'rencfs mount --mount-point /mnt/encrypted --data-dir /path/to/encrypted/data'
  },
  {
    title: 'Custom Cipher',
    description: 'Specify encryption algorithm and log level',
    command: 'rencfs mount --cipher AES256-GCM --log-level INFO --mount-point /mnt/secure --data-dir /data'
  },
  {
    title: 'Change Password',
    description: 'Change encryption password without re-encrypting data',
    command: 'rencfs passwd --data-dir /path/to/encrypted/data'
  },
  {
    title: 'Unmount',
    description: 'Safely unmount the encrypted filesystem',
    command: 'fusermount3 -u /mnt/encrypted'
  }
];

const troubleshooting = [
  {
    issue: 'Permission Denied',
    solution: 'Add your user to the fuse group: sudo usermod -a -G fuse $USER'
  },
  {
    issue: 'FUSE Not Found',
    solution: 'Install FUSE3 development packages for your distribution'
  },
  {
    issue: 'Mount Point Busy',
    solution: 'Unmount existing filesystem: fusermount3 -u /mount/point'
  },
  {
    issue: 'Cargo Build Fails',
    solution: 'Update Rust toolchain: rustup update && cargo clean && cargo build'
  }
];

export default function InstallationPage() {
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
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Installation
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Get rencfs up and running on your system in minutes with multiple installation options
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-8 mb-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-amber-200 mb-6 flex items-center gap-3">
                <Terminal className="w-8 h-8" />
                Prerequisites
              </h2>
              <p className="text-amber-100 mb-6">
                FUSE3 is required to mount the encrypted filesystem. Install it for your distribution:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {prerequisites.map((prereq, index) => (
                  <div key={index} className="bg-black/30 rounded-2xl p-6 border border-amber-500/20">
                    <h3 className="text-amber-200 font-bold text-lg mb-4">{prereq.os}</h3>
                    {prereq.commands.map((command, cmdIndex) => (
                      <div key={cmdIndex} className="mb-3 last:mb-0">
                        <div className="bg-black/50 rounded-lg p-3 font-mono text-amber-100 text-sm relative group">
                          {command}
                          <button
                            onClick={() => copyToClipboard(command)}
                            className="absolute top-2 right-2 p-1 bg-white/10 hover:bg-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedCommand === command ? (
                              <Check className="w-3 h-3 text-green-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Installation Methods</h2>
            
            {/* Method Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
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

            {/* Active Method Content */}
            {installMethods.map((method) => (
              <div
                key={method.id}
                className={`transition-all duration-500 ${
                  activeTab === method.id ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{method.title}</h3>
                      <p className="text-gray-300">{method.description}</p>
                    </div>
                    <a
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </a>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {method.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <div className={`w-2 h-2 bg-gradient-to-r ${method.color} rounded-full`}></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Command:</h4>
                      <div className="bg-black/50 rounded-2xl p-4 border border-gray-700/50 relative group">
                        <code className="text-green-400 font-mono text-sm block break-all">{method.command}</code>
                        <button
                          onClick={() => copyToClipboard(method.command)}
                          className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Usage Examples</h2>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {usageExamples.map((example, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{example.title}</h3>
                      <p className="text-gray-300 text-sm">{example.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-2xl p-4 border border-gray-700/50 relative group">
                    <code className="text-blue-400 font-mono text-sm block break-all">
                      {example.command}
                    </code>
                    <button
                      onClick={() => copyToClipboard(example.command)}
                      className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
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
        </section>

        {/* Troubleshooting */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Troubleshooting</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {troubleshooting.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-white">{item.issue}</h3>
                  </div>
                  <p className="text-gray-300 text-sm pl-8">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
