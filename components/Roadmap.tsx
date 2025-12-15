import React from 'react';
import Section from './Section';
import { Milestone } from '../types';
import { CheckCircle2, Clock, Flag } from 'lucide-react';

const milestones: Milestone[] = [
  {
    year: "第一阶段：建设期",
    title: "2026年2月 - 8月",
    description: "夯实基础，顺利投产",
    details: [
      "完成土地勘测、规划设计及报批",
      "主体工程建设（厂房、宿舍、办公楼）",
      "智能生产线与仓储系统安装调试",
      "基地人员招聘与培训，建立供应链雏形"
    ]
  },
  {
    year: "第二阶段：爬升期",
    title: "2027 - 2029年",
    description: "产能利用率达80%以上",
    details: [
      "生产线满负荷试产与工艺优化",
      "核心产品线（教育、家居）全面投产",
      "打通国内外线上线下销售渠道",
      "实现首个完整财年盈利目标"
    ]
  },
  {
    year: "第三阶段：全面发展",
    title: "2030年及以后",
    description: "区域示范，规模盈利",
    details: [
      "推进新产品迭代与智能化升级",
      "市场份额提升至行业前列",
      "启动二期扩建或新园区规划",
      "构建完善的产业生态系统"
    ]
  }
];

const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap" className="bg-slate-900 text-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-2">发展路径</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">稳健前行，分步跨越</h3>
          <p className="text-slate-400 max-w-xl">
            明确的战略规划，确保从基础设施建设到市场全面爆发的每一步都扎实稳健。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors group">
            {/* Connector Line (Desktop) */}
            {idx < milestones.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-[2px] bg-slate-700 group-hover:bg-blue-600 transition-colors z-0" />
            )}
            
            <div className="flex items-center gap-3 mb-6">
               <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/50 text-blue-400 font-bold border border-blue-500/30">
                 {idx + 1}
               </span>
               <div className="h-[2px] flex-grow bg-slate-700"></div>
            </div>

            <h4 className="text-xl font-bold text-blue-100 mb-1">{milestone.year}</h4>
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-4">
              <Clock size={16} />
              <span>{milestone.title}</span>
            </div>
            <p className="text-white font-semibold mb-6">{milestone.description}</p>
            
            <ul className="space-y-3">
              {milestone.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-400">
                  <CheckCircle2 size={16} className="mt-0.5 text-blue-500 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Roadmap;