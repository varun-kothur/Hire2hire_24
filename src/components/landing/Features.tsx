import React from 'react';
import { LineChart, BarChart3, PieChart } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features: React.FC = () => {
  const features = [
    {
      Icon: LineChart,
      title: 'Real-time Analysis',
      description: 'Advanced stock performance metrics with live market data integration',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
    {
      Icon: BarChart3,
      title: 'Risk Analytics',
      description: 'Comprehensive risk assessment tools for informed decision making',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
    {
      Icon: PieChart,
      title: 'Smart Insights',
      description: 'AI-powered market intelligence and portfolio optimization',
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};