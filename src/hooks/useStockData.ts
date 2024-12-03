import { useState, useEffect } from 'react';
import { Stock } from '../types';
import { fetchStockData } from '../services/stockService';
import { calculateReturns } from '../utils/stockCalculations';

export const useStockData = (symbols: string[]) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [benchmark, setBenchmark] = useState<Stock | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch benchmark data first
        const benchmarkPrices = await fetchStockData('SPY');
        const newBenchmark: Stock = {
          symbol: 'SPY',
          name: 'S&P 500 ETF',
          prices: benchmarkPrices,
          returns: calculateReturns(benchmarkPrices)
        };
        setBenchmark(newBenchmark);

        // Fetch selected stocks data
        const stocksData = await Promise.all(
          symbols.map(async (symbol) => {
            const prices = await fetchStockData(symbol);
            return {
              symbol,
              name: symbol,
              prices,
              returns: calculateReturns(prices)
            };
          })
        );
        
        setStocks(stocksData);
      } catch (err) {
        setError('Failed to fetch stock data');
        console.error('Error fetching stock data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbols]);

  return { stocks, benchmark, loading, error };
};