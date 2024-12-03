import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  iconColor,
  bgColor,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
      <div className={`${bgColor} p-3 rounded-full w-fit mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className={`text-xl font-semibold ${iconColor} mb-3`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};