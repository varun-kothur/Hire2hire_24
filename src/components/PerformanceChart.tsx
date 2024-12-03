import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PerformanceChartProps } from '../types';

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ stocks, benchmark }) => {
  const colors = ['#2563eb', '#16a34a', '#dc2626', '#9333ea'];
  
  const getData = () => {
    return benchmark.prices.map((_, index) => {
      const dataPoint: any = { date: `Day ${index + 1}` };
      stocks.forEach((stock) => {
        dataPoint[stock.symbol] = stock.prices[index];
      });
      dataPoint[benchmark.symbol] = benchmark.prices[index];
      return dataPoint;
    });
  };

  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Price Performance Comparison</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={getData()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {stocks.map((stock, index) => (
            <Line
              key={stock.symbol}
              type="monotone"
              dataKey={stock.symbol}
              stroke={colors[index % colors.length]}
              dot={false}
            />
          ))}
          <Line
            type="monotone"
            dataKey={benchmark.symbol}
            stroke="#6b7280"
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};