import Navigation from '@/react-app/components/Navigation';
import { Users, MessageSquare, Github, ExternalLink, Star, GitBranch, Bug, Lightbulb, Heart, Calendar } from 'lucide-react';

const communityPlatforms = [
  {
    name: 'Slack Community',
    description: 'Join our active Slack workspace for real-time discussions, support, and collaboration',
    icon: MessageSquare,
    url: 'https://join.slack.com/t/rencfs/shared_invite/zt-2w9cpnql2-o0qtN_rXFNjHvp92qFhXCg',
    members: '150+ members',
    activity: 'Very Active',
    color: 'from-purple-400 to-blue-500',
    features: [
      'Real-time support and discussions',
      'Development updates and announcements',
      'Feature requests and feedback',
      'Community-driven troubleshooting'
    ]
  },
  {
    name: 'GitHub Repository',
    description: 'Contribute code, report issues, and collaborate on development',
    icon: Github,
    url: 'https://github.com/xoriors/rencfs',
    members: '200+ stars',
    activity: 'Daily Updates',
    color: 'from-gray-400 to-gray-600',
    features: [
      'Source code and development',
      'Issue tracking and bug reports',
      'Pull requests and contributions',
      'Release notes and changelog'
    ]
  },
  {
    name: 'Code Triage',
    description: 'Help triage issues and contribute to project maintenance',
    icon: Bug,
    url: 'https://www.codetriage.com/xoriors/rencfs',
    members: '25+ contributors',
    activity: 'Weekly',
    color: 'from-green-400 to-emerald-500',
    features: [
      'Issue triage and categorization',
      'Code review assistance',
      'Documentation improvements',
      'Quality assurance testing'
    ]
  },
  {
    name: 'StarTech-RD Meetup',
    description: 'In-person meetups and presentations in Dominican Republic',
    icon: Users,
    url: 'https://www.meetup.com/star-tech-rd-reloaded/',
    members: '500+ members',
    activity: 'Monthly Events',
    color: 'from-yellow-400 to-orange-500',
    features: [
      'Technical presentations',
      'Networking events',
      'Hands-on workshops',
      'Local tech community'
    ]
  }
];

const contributionAreas = [
  {
    title: 'Code Contributions',
    description: 'Help improve the core filesystem implementation',
    icon: GitBranch,
    areas: [
      'Core filesystem features',
      'Performance optimizations',
      'Security enhancements',
      'Cross-platform compatibility',
      'Test coverage improvements',
      'Documentation updates'
    ],
    skillLevel: 'Intermediate to Advanced',
    technologies: ['Rust', 'FUSE', 'Cryptography', 'Linux']
  },
  {
    title: 'Documentation',
    description: 'Improve guides, tutorials, and API documentation',
    icon: ExternalLink,
    areas: [
      'User guides and tutorials',
      'API documentation',
      'Installation instructions',
      'Troubleshooting guides',
      'Example code and demos',
      'Translation to other languages'
    ],
    skillLevel: 'Beginner to Intermediate',
    technologies: ['Markdown', 'Technical Writing', 'Git']
  },
  {
    title: 'Testing & QA',
    description: 'Test the filesystem on different platforms and use cases',
    icon: Bug,
    areas: [
      'Manual testing on various distributions',
      'Performance benchmarking',
      'Security testing',
      'Edge case discovery',
      'Regression testing',
      'User experience testing'
    ],
    skillLevel: 'Beginner to Advanced',
    technologies: ['Linux', 'Testing Tools', 'Benchmarking']
  },
  {
    title: 'Community Support',
    description: 'Help other users and grow the community',
    icon: Heart,
    areas: [
      'Answer questions in Slack',
      'Triage GitHub issues',
      'Write blog posts and tutorials',
      'Create video content',
      'Organize meetups and events',
      'Social media engagement'
    ],
    skillLevel: 'All Levels',
    technologies: ['Communication', 'Technical Knowledge']
  }
];

const projectStats = [
  {
    label: 'GitHub Stars',
    value: '200+',
    icon: Star,
    color: 'text-yellow-400'
  },
  {
    label: 'Contributors',
    value: '25+',
    icon: Users,
    color: 'text-blue-400'
  },
  {
    label: 'Slack Members',
    value: '150+',
    icon: MessageSquare,
    color: 'text-purple-400'
  },
  {
    label: 'Issues Resolved',
    value: '75+',
    icon: Bug,
    color: 'text-green-400'
  }
];

const upcomingEvents = [
  {
    title: 'rencfs Security Deep Dive',
    date: 'August 15, 2025',
    type: 'Online Presentation',
    description: 'Technical deep dive into the cryptographic implementation and security features of rencfs.',
    platform: 'Slack + YouTube Live'
  },
  {
    title: 'StarTech-RD Monthly Meetup',
    date: 'August 20, 2025',
    type: 'In-Person Event',
    description: 'Monthly tech meetup in Santo Domingo with rencfs development updates.',
    platform: 'Santo Domingo, DR'
  },
  {
    title: 'Open Source Contribution Workshop',
    date: 'September 5, 2025',
    type: 'Workshop',
    description: 'Learn how to contribute to rencfs and other open source projects.',
    platform: 'Online + In-Person'
  }
];

const recognizedContributors = [
  {
    name: 'Core Development Team',
    contribution: 'Architecture and core implementation',
    impact: 'Foundation of the project'
  },
  {
    name: 'Security Reviewers',
    contribution: 'Cryptographic implementation review',
    impact: 'Enhanced security and reliability'
  },
  {
    name: 'Documentation Writers',
    contribution: 'Comprehensive guides and tutorials',
    impact: 'Improved user experience'
  },
  {
    name: 'Beta Testers',
    contribution: 'Early testing and feedback',
    impact: 'Bug discovery and quality improvements'
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
                Community
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join our growing community of developers, security enthusiasts, and contributors building the future of encrypted filesystems
              </p>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {projectStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Join Our Community</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {communityPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{platform.members}</span>
                        <span>•</span>
                        <span>{platform.activity}</span>
                      </div>
                    </div>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group-hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </a>
                  </div>

                  <p className="text-gray-300 mb-6">{platform.description}</p>
                  
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${platform.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution Areas */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">How to Contribute</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {contributionAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                      <p className="text-blue-300 text-sm">{area.skillLevel}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{area.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Areas to contribute:</h4>
                    <ul className="space-y-2">
                      {area.areas.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Upcoming Events</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">{event.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-purple-300 text-sm mb-3">{event.type}</p>
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <div className="text-gray-400 text-xs">
                    <span className="font-medium">Platform: </span>
                    {event.platform}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contributors Recognition */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Contributors & Recognition</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <p className="text-gray-300">
                    We're grateful to all our contributors who make rencfs better every day. 
                    Every contribution, no matter how small, makes a difference.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {recognizedContributors.map((contributor, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">{contributor.name}</h3>
                      <p className="text-gray-300 text-sm mb-2">{contributor.contribution}</p>
                      <p className="text-blue-300 text-xs">{contributor.impact}</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <a
                    href="https://github.com/xoriors/rencfs/graphs/contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    View All Contributors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
