import React from 'react';
import { ShieldCheck, Users, Activity, HeartHandshake, Home, Smile, LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  content: string;
  iconName: string;
  color: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Users,
  Activity,
  HeartHandshake,
  Home,
  Smile
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, content, iconName, color }) => {
  const Icon = iconMap[iconName] || Activity;

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-${color}`}>
      <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 text-${color}`} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
};
