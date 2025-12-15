import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Cog, Home, Baby, Dog, BookOpen, Layers, Truck, PackageCheck } from 'lucide-react';
import Section from './Section';
import { BusinessType } from '../types';

const Business: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BusinessType>(BusinessType.CONSUMER);

  const features = {
    [BusinessType.CONSUMER]: [
      {
        title: "益智成长系列",
        desc: "专注STEAM教育理念，开发激发创造力与逻辑思维的益智玩具与教具，涵盖积木、科学实验套装等。",
        icon: BookOpen,
        color: "bg-orange-100 text-orange-600"
      },
      {
        title: "品质家居系列",
        desc: "以收纳盒、果盘等实用家居产品为核心，融合人性化设计与环保材质，打造高品质现代居家环境。",
        icon: Home,
        color: "bg-green-100 text-green-600"
      },
      {
        title: "关爱呵护系列",
        desc: "针对母婴与宠物群体，提供安全健康的护理用品及趣味互动产品，满足情感陪伴需求。",
        icon: Baby,
        color: "bg-pink-100 text-pink-600"
      },
      {
        title: "宠物用品",
        desc: "多元化宠物用品开发，提升生活品质与人宠互动体验。",
        icon: Dog,
        color: "bg-purple-100 text-purple-600"
      }
    ],
    [BusinessType.INDUSTRIAL]: [
      {
        title: "智能缝纫生产线",
        desc: "集成自动裁剪、智能缝纫、智能互动流水线，专为纺织服装行业提升生产效率。",
        icon: Layers,
        color: "bg-blue-100 text-blue-600"
      },
      {
        title: "智能输送系统",
        desc: "应用于工厂内部物料流转，包括输送带、AGV小车等，实现物料搬运全自动化。",
        icon: Truck,
        color: "bg-indigo-100 text-indigo-600"
      },
      {
        title: "智能仓储设备",
        desc: "立体货架、堆垛机、WMS仓库管理软件，实现仓储空间最大化利用和库存精准管理。",
        icon: PackageCheck,
        color: "bg-cyan-100 text-cyan-600"
      }
    ]
  };

  return (
    <Section id="business" className="bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">核心业务</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">双轮驱动，智造美好生活</h3>
        <p className="text-gray-600">
          形成了"智能制造+消费品"双轮驱动的独特发展模式，将创新设计与实用功能完美结合。
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex">
          <button
            onClick={() => setActiveTab(BusinessType.CONSUMER)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === BusinessType.CONSUMER ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <ShoppingBag size={18} /> 多元消费品
          </button>
          <button
            onClick={() => setActiveTab(BusinessType.INDUSTRIAL)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === BusinessType.INDUSTRIAL ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <Cog size={18} /> 智能装备
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features[activeTab].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          {/* Add a visual image card for balance */}
          <div className="md:col-span-2 lg:col-span-1 min-h-[250px] relative rounded-2xl overflow-hidden group">
            <img 
              src={activeTab === BusinessType.CONSUMER ? "https://picsum.photos/600/400?image=1060" : "https://picsum.photos/600/400?image=1073"} 
              alt="Feature Visual" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <span className="text-white font-bold text-lg">
                {activeTab === BusinessType.CONSUMER ? "服务全球家庭" : "赋能工业4.0"}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Business;