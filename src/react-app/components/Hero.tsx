import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Shield, Lock, Zap, Github, ArrowRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="top-20 left-10 absolute bg-purple-500/10 blur-3xl rounded-full w-72 h-72 animate-pulse"></div>
        <div className="right-10 bottom-20 absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96 animate-pulse delay-700"></div>
        <div className="top-1/2 left-1/2 absolute bg-indigo-500/5 blur-3xl rounded-full w-80 h-80 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-1000 transform"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="z-10 relative flex flex-col items-center mx-auto px-6 py-20 text-center container">
        {/* Logo/Icon */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="flex justify-center items-center bg-gradient-to-br from-purple-400 to-blue-500 shadow-2xl rounded-2xl w-24 h-24">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <div className="-top-2 -right-2 absolute flex justify-center items-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-8 h-8">
              <Lock className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1
          className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 transform transition-all duration-1000 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          rencfs
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl leading-relaxed transform transition-all duration-1000 delay-400 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          An encrypted file system written in{" "}
          <span className="font-semibold text-orange-400">Rust</span> that is
          mounted with <span className="font-semibold text-blue-400">FUSE</span>{" "}
          on Linux. Create encrypted directories with enterprise-grade security
          and blazing performance.
        </p>

        {/* Feature highlights */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-12 transform transition-all duration-1000 delay-600 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-full">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="font-medium text-gray-200">AEAD Encryption</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-full">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-medium text-gray-200">Fast Seek</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-full">
            <Lock className="w-5 h-5 text-purple-400" />
            <span className="font-medium text-gray-200">Memory Safe</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-800 mb-2 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            to="/installation"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-blue-600 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25 px-8 py-4 rounded-2xl font-semibold text-white text-lg hover:scale-105 transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" />
            Get Started
          </Link>
          <a
            href="https://github.com/xoriors/rencfs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 border border-white/20 rounded-2xl font-semibold text-white text-lg hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View on GitHub
          </a>
        </div>

        {/* Waitlist Field */}
        <WaitlistForm
          className={
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }
        />

        {/* Warning badge */}
        <div
          className={`mt-12 max-w-2xl transform transition-all duration-1000 delay-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-amber-500/10 backdrop-blur-sm p-4 border border-amber-500/30 rounded-2xl">
            <p className="text-amber-200 text-sm">
              <span className="font-semibold">⚠️ Development Notice:</span> This
              project is still under development. Please do not use it with
              sensitive data until a stable release. Ideal for experimental and
              learning projects.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform">
        <div className="flex justify-center border-2 border-white/30 rounded-full w-6 h-10">
          <div className="bg-white/50 mt-2 rounded-full w-1 h-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
