import React from 'react';
import Section from './Section';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    name: "张晓晴",
    role: "首席执行官 / 创始人",
    description: "深耕行业十余年，具备敏锐洞察与全球化运营经验。主导规划蕲春智能生产基地，推动“研发+生产+营销”创新模式。",
    image: "https://picsum.photos/400/400?image=1027" // Placeholder woman
  },
  {
    name: "张树生",
    role: "智能制造总监",
    description: "全面负责生产基地智能化建设，主导产线、物流系统规划，确保生产体系高效运行。",
    image: "https://picsum.photos/400/400?image=1012" // Placeholder man
  },
  {
    name: "张小庆",
    role: "研发中心负责人",
    description: "领导产品研发与技术创新，统筹教育用品与智能装备产品线，构建技术壁垒。",
    image: "https://picsum.photos/400/400?image=1025"
  },
  {
    name: "卢星",
    role: "全球营销总监",
    description: "负责全球市场战略，拓展国内外渠道，建立品牌影响力，实现双业务线增长。",
    image: "https://picsum.photos/400/400?image=1005"
  }
];

const Team: React.FC = () => {
  return (
    <Section id="team" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">管理团队</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">精英领航，专业筑基</h3>
        <p className="text-gray-600">
          汇聚行业顶尖人才，以丰富的经验和前瞻的视野，引领朗坤智能向全球化目标迈进。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="group text-center">
            <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg group-hover:border-blue-100 transition-colors">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
            <p className="text-blue-600 font-medium mb-4 text-sm uppercase tracking-wide">{member.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;