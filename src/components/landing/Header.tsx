import React from 'react';
import { TrendingUp, Code } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-full backdrop-blur-sm">
          <TrendingUp className="w-16 h-16 text-blue-400" />
        </div>
      </div>
      <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
        Welcome to StockSense
      </h1>
      <div className="flex items-center justify-center gap-3 mb-8">
        <Code className="w-6 h-6 text-blue-400" />
        <p className="text-2xl text-blue-200">Team Code Brigades</p>
      </div>
    </div>
  );
};