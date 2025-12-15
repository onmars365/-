import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/langkun-factory.png"
          alt="朗坤智能制造产业园"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Prevent infinite loop if fallback fails, and switch to a high-quality placeholder
            e.currentTarget.onerror = null; 
            e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        {/* Adjusted overlay: Reduced opacity to 60% to ensure the factory image is more visible while keeping text readable */}
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
            <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">政企协奏 · 共建蕲春</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            扎根蕲春 <span className="text-blue-400">布局全球</span><br />
            智造未来
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            湖北朗坤智能科技有限公司，依托深圳成熟经验，打造21.3亩智能生产基地与研发中心，致力于成为区域经济新引擎与行业创新新标杆。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="#about" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30">
              了解更多 <ArrowRight size={20} />
            </a>
            <a href="#business" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all">
              探索核心业务
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;