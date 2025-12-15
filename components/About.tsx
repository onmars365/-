import React from 'react';
import { Target, Lightbulb, ShieldCheck, Factory, TrendingUp, Users } from 'lucide-react';
import Section from './Section';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: '21.3', label: '亩', description: '智能制造基地面积' },
  { value: '1.2', label: '亿元', description: '项目总投资金额' },
  { value: '200+', label: '岗位', description: '预计新增就业' },
  { value: '574', label: '家', description: '全球信赖客户' },
];

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">关于朗坤</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">征程新启，绽放未来</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            湖北朗坤智能科技有限公司集研发、生产、销售于一体。公司积极响应国家智能制造战略，依托深圳成熟经验，在蕲春建设智能生产基地。
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            通过"研发驱动+自主生产+全球营销"的创新模式，我们致力于打造智能制造与消费品双轮驱动的产业格局，为区域经济发展注入新动能。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <Lightbulb className="text-blue-600 mb-3" size={28} />
              <h4 className="font-bold text-slate-800 mb-1">创新进取</h4>
              <p className="text-xs text-gray-500">突破传统，打造行业标杆</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <Target className="text-blue-600 mb-3" size={28} />
              <h4 className="font-bold text-slate-800 mb-1">专业高效</h4>
              <p className="text-xs text-gray-500">全产业链条专业实力</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <ShieldCheck className="text-blue-600 mb-3" size={28} />
              <h4 className="font-bold text-slate-800 mb-1">品质务实</h4>
              <p className="text-xs text-gray-500">国际标准，卓越品质</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/800/600?image=1055" alt="Office Building" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-2xl text-white shadow-xl hidden md:block max-w-xs">
            <p className="text-lg font-semibold mb-2">"智造美好生活体验"</p>
            <p className="text-blue-100 text-sm">构建完整产业链，形成产业集群效应。</p>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {stat.value}<span className="text-xl text-gray-400 ml-1">{stat.label}</span>
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;