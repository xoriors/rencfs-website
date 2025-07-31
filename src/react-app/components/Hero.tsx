import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Shield, Lock, Zap, Github, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Logo/Icon */}
        <div className={`mb-8 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 transform transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          rencfs
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl leading-relaxed transform transition-all duration-1000 delay-400 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          An encrypted file system written in <span className="text-orange-400 font-semibold">Rust</span> that is mounted with <span className="text-blue-400 font-semibold">FUSE</span> on Linux. 
          Create encrypted directories with enterprise-grade security and blazing performance.
        </p>

        {/* Feature highlights */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 transform transition-all duration-1000 delay-600 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-gray-200 font-medium">AEAD Encryption</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-200 font-medium">Fast Seek</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Lock className="w-5 h-5 text-purple-400" />
            <span className="text-gray-200 font-medium">Memory Safe</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-800 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link 
            to="/installation"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Get Started
          </Link>
          <a 
            href="https://github.com/xoriors/rencfs" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View on GitHub
          </a>
        </div>

        {/* Warning badge */}
        <div className={`mt-12 max-w-2xl transform transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-amber-200 text-sm">
              <span className="font-semibold">⚠️ Development Notice:</span> This project is still under development. 
              Please do not use it with sensitive data until a stable release. Ideal for experimental and learning projects.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
