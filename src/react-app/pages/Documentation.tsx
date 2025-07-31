import Navigation from '@/react-app/components/Navigation';
import { ExternalLink, FileText, Github, Users, Code2, Terminal } from 'lucide-react';

const documentationSections = [
  {
    title: 'API Documentation',
    description: 'Complete API reference and library documentation',
    icon: Code2,
    color: 'from-blue-400 to-cyan-500',
    links: [
      {
        title: 'docs.rs/rencfs',
        description: 'Complete Rust API documentation',
        url: 'https://docs.rs/rencfs/',
        external: true
      }
    ]
  },
  {
    title: 'Source Code',
    description: 'Browse the source code and contribute',
    icon: Github,
    color: 'from-purple-400 to-pink-500',
    links: [
      {
        title: 'GitHub Repository',
        description: 'Main source code repository',
        url: 'https://github.com/xoriors/rencfs',
        external: true
      },
      {
        title: 'Issues & Bug Reports',
        description: 'Report bugs and request features',
        url: 'https://github.com/xoriors/rencfs/issues',
        external: true
      },
      {
        title: 'Pull Requests',
        description: 'Contribute code changes',
        url: 'https://github.com/xoriors/rencfs/pulls',
        external: true
      }
    ]
  },
  {
    title: 'Guides & Tutorials',
    description: 'In-depth guides and technical articles',
    icon: FileText,
    color: 'from-green-400 to-emerald-500',
    links: [
      {
        title: 'The Hitchhiker\'s Guide to Building an Encrypted Filesystem in Rust',
        description: 'Comprehensive technical guide on Medium',
        url: 'https://medium.com/system-weakness/the-hitchhikers-guide-to-building-an-encrypted-filesystem-in-rust-4d678c57d65c',
        external: true
      },
      {
        title: 'PDF Version of the Guide',
        description: 'Downloadable PDF version',
        url: 'https://xoriors.github.io/rencfs/docs/The_Hitchhiker_s_Guide_to_Building_an_Encrypted_Filesystem_in_Rust.pdf',
        external: true
      },
      {
        title: 'StarTech-RD Presentation',
        description: 'Technical presentation and meetup',
        url: 'https://startech-rd.io/hitchhikers-guide-to/',
        external: true
      }
    ]
  },
  {
    title: 'Community',
    description: 'Connect with other users and contributors',
    icon: Users,
    color: 'from-yellow-400 to-orange-500',
    links: [
      {
        title: 'Slack Community',
        description: 'Join the rencfs Slack workspace',
        url: 'https://join.slack.com/t/rencfs/shared_invite/zt-2w9cpnql2-o0qtN_rXFNjHvp92qFhXCg',
        external: true
      },
      {
        title: 'Code Triage',
        description: 'Help triage issues and contribute',
        url: 'https://www.codetriage.com/xoriors/rencfs',
        external: true
      },
      {
        title: 'StarTech-RD Meetup',
        description: 'Dominican Republic tech meetup',
        url: 'https://www.meetup.com/star-tech-rd-reloaded/',
        external: true
      }
    ]
  }
];

const quickStart = [
  {
    step: 1,
    title: 'Install Prerequisites',
    description: 'Install FUSE3 and Rust',
    command: 'sudo apt-get install fuse3 && curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh'
  },
  {
    step: 2,
    title: 'Install rencfs',
    description: 'Install from crates.io',
    command: 'cargo install rencfs'
  },
  {
    step: 3,
    title: 'Create Mount Point',
    description: 'Create directory for mounting',
    command: 'mkdir -p /mnt/encrypted'
  },
  {
    step: 4,
    title: 'Mount Filesystem',
    description: 'Mount encrypted filesystem',
    command: 'rencfs mount --mount-point /mnt/encrypted --data-dir ~/encrypted-data'
  }
];

const cliReference = [
  {
    command: 'mount',
    description: 'Mount an encrypted filesystem',
    usage: 'rencfs mount [OPTIONS] --mount-point <MOUNT_POINT> --data-dir <DATA_DIR>',
    options: [
      '--cipher <CIPHER>: Encryption cipher (ChaCha20Poly1305, AES256-GCM)',
      '--log-level <LEVEL>: Logging level (ERROR, WARN, INFO, DEBUG, TRACE)',
      '--allow-root: Allow root user to access the filesystem',
      '--allow-other: Allow other users to access the filesystem'
    ]
  },
  {
    command: 'passwd',
    description: 'Change filesystem password',
    usage: 'rencfs passwd --data-dir <DATA_DIR>',
    options: [
      '--data-dir <DIR>: Path to encrypted data directory'
    ]
  },
  {
    command: 'help',
    description: 'Display help information',
    usage: 'rencfs help [COMMAND]',
    options: [
      'COMMAND: Show help for specific command'
    ]
  }
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive guides, API references, and resources for rencfs
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Quick Start Guide</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {quickStart.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        <div className="bg-black/50 rounded-2xl p-4 border border-gray-700/50">
                          <code className="text-green-400 font-mono text-sm block break-all">
                            {step.command}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Documentation Resources</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {documentationSections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors mb-1">
                              {link.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{link.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-3" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLI Reference */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">CLI Reference</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {cliReference.map((cmd, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-bold text-white">{cmd.command}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{cmd.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Usage:</h4>
                    <div className="bg-black/50 rounded-2xl p-4 border border-gray-700/50">
                      <code className="text-blue-400 font-mono text-sm">{cmd.usage}</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Options:</h4>
                    <ul className="space-y-2">
                      {cmd.options.map((option, optIndex) => (
                        <li key={optIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <code className="text-gray-200 text-sm font-mono">{option}</code>
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
