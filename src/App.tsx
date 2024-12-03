import React, { useState } from 'react';
import { StockMetricsCard } from './components/StockMetricsCard';
import { PerformanceChart } from './components/PerformanceChart';
import { StockSelector } from './components/StockSelector';
import { LandingPage } from './components/LandingPage';
import { useStockData } from './hooks/useStockData';
import { calculateMetrics } from './utils/metricsCalculator';
import { TrendingUp } from 'lucide-react';

function App() {
  const [showPlatform, setShowPlatform] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>(['AAPL', 'MSFT', 'GOOGL']);
  const { stocks, benchmark, loading, error } = useStockData(selectedSymbols);
  
  const results = React.useMemo(() => {
    if (!stocks.length || !benchmark) return [];
    return stocks.map(stock => ({
      stock,
      metrics: calculateMetrics(stock, benchmark)
    }));
  }, [stocks, benchmark]);

  const handleAddStock = (symbol: string) => {
    if (selectedSymbols.length < 5) {
      setSelectedSymbols([...selectedSymbols, symbol]);
    }
  };

  const handleRemoveStock = (symbol: string) => {
    setSelectedSymbols(selectedSymbols.filter(s => s !== symbol));
  };

  if (!showPlatform) {
    return <LandingPage onEnter={() => setShowPlatform(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
          <div className="bg-blue-500/20 p-3 rounded-full mr-4">
            <TrendingUp className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">StockSense Analytics</h1>
            <p className="text-blue-200">Advanced Stock Performance & Risk Analysis</p>
          </div>
        </div>

        <StockSelector
          selectedStocks={selectedSymbols}
          onAddStock={handleAddStock}
          onRemoveStock={handleRemoveStock}
        />

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
            <p className="mt-4 text-blue-200">Loading stock data...</p>
          </div>
        ) : (
          <>
            {benchmark && (
              <div className="mb-8 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <PerformanceChart stocks={stocks} benchmark={benchmark} />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <StockMetricsCard
                  key={result.metrics.symbol}
                  metrics={result.metrics}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;