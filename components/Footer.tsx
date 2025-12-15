import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const DouyinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WeChatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M8 12c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5-2.7 5-6 5zm9 5c-3 0-5.5-1.8-5.5-4 0-2.2 2.5-4 5.5-4s5.5 1.8 5.5 4c0 2.2-2.5 4-5.5 4zm0-9c-3.6 0-6.5 2.6-6.5 5.8 0 1.7.8 3.2 2.2 4.3l-.8 2.4 2.4-1.2c.8.3 1.8.5 2.7.5 3.6 0 6.5-2.6 6.5-5.8S19.6 8 16 8z"/>
  </svg>
);

const WeiboIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.5 0-4.5-1.5-4.5-3.5s2-3.5 4.5-3.5 4.5 1.5 4.5 3.5-2 3.5-4.5 3.5zm2.5-6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
  </svg>
);

const XiaohongshuIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <rect x="2" y="3" width="20" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <text x="12" y="23" fontSize="8" textAnchor="middle" fill="currentColor" className="opacity-0">小红书</text>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-24 md:h-28 w-auto text-white" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              扎根蕲春，布局全球。我们致力于通过智能制造技术升级和全产业链布局，为全球客户提供卓越的产品与服务。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" title="抖音">
                <DouyinIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-colors" title="微信">
                <WeChatIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-colors" title="小红书">
                <XiaohongshuIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors" title="微博">
                <WeiboIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">快速链接</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">关于我们</a></li>
              <li><a href="#business" className="hover:text-blue-400 transition-colors">产品服务</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">招贤纳士</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">联系方式</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span>湖北省黄冈市蕲春县<br/>智能制造产业园</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+86 0713-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>contact@langkun-smart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 湖北朗坤智能科技有限公司 版权所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;