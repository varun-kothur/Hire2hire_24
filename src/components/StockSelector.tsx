import React from 'react';
import { Search, Plus, X } from 'lucide-react';
import { StockSelectorProps } from '../types';

export const StockSelector: React.FC<StockSelectorProps> = ({
  selectedStocks,
  onAddStock,
  onRemoveStock,
}) => {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input && !selectedStocks.includes(input.toUpperCase())) {
      onAddStock(input.toUpperCase());
      setInput('');
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Select Stocks to Analyze</h2>
      
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            placeholder="Enter stock symbol (e.g., AAPL)"
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          disabled={selectedStocks.length >= 5}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          Add Stock
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {selectedStocks.map((symbol) => (
          <div
            key={symbol}
            className="bg-blue-500/20 px-4 py-2 rounded-lg flex items-center gap-2 text-blue-200"
          >
            <span className="font-medium">{symbol}</span>
            <button
              onClick={() => onRemoveStock(symbol)}
              className="text-blue-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};