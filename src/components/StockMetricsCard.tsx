import React from 'react';
import { RiskMetrics } from '../types/stock';
import { TrendingUp, TrendingDown, Activity, Target, ArrowUpDown, LineChart, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

interface StockMetricsCardProps {
  metrics: RiskMetrics;
}

export const StockMetricsCard: React.FC<StockMetricsCardProps> = ({ metrics }) => {
  const companyInfo = COMPANY_INFO[metrics.symbol] || {
    name: metrics.symbol,
    sector: 'Unknown',
    description: 'Company information not available'
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{metrics.symbol}</h3>
          <p className="text-blue-200">{companyInfo.name}</p>
        </div>
        <div className={`p-2 rounded-full ${
          metrics.sharpeRatio > 1 ? 'bg-green-500/20' : 'bg-red-500/20'
        }`}>
          {metrics.sharpeRatio > 1 ? 
            <TrendingUp className="text-green-400 w-6 h-6" /> : 
            <TrendingDown className="text-red-400 w-6 h-6" />
          }
        </div>
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
          {companyInfo.sector}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center text-gray-300">
            <Activity className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm">Return</span>
          </div>
          <p className={`text-lg font-semibold ${
            metrics.averageReturn > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {metrics.averageReturn.toFixed(2)}%
          </p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center text-gray-300">
            <ArrowUpDown className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm">Volatility</span>
          </div>
          <p className="text-lg font-semibold text-purple-300">
            {metrics.volatility.toFixed(2)}%
          </p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center text-gray-300">
            <Target className="w-4 h-4 mr-2 text-indigo-400" />
            <span className="text-sm">Sharpe Ratio</span>
          </div>
          <p className={`text-lg font-semibold ${
            metrics.sharpeRatio > 1 ? 'text-green-400' : 'text-red-400'
          }`}>
            {metrics.sharpeRatio.toFixed(2)}
          </p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center text-gray-300">
            <LineChart className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm">Beta</span>
          </div>
          <p className={`text-lg font-semibold ${
            Math.abs(metrics.beta - 1) < 0.1 ? 'text-gray-300' : 
            metrics.beta > 1 ? 'text-orange-400' : 'text-cyan-400'
          }`}>
            {metrics.beta.toFixed(2)}
          </p>
        </div>
      </div>
      
      <div className="space-y-3 border-t border-white/10 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Alpha</span>
          <span className={`font-semibold ${
            metrics.alpha > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {metrics.alpha.toFixed(2)}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Max Drawdown</span>
          <span className="font-semibold text-red-400">
            {metrics.maxDrawdown.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-300">{companyInfo.description}</p>
        </div>
      </div>
    </div>
  );
};