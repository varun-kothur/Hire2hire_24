import { Stock, RiskMetrics } from '../types';
import {
  calculateAverageReturn,
  calculateVolatility,
  calculateSharpeRatio,
  calculateBeta,
  calculateAlpha,
  calculateMaxDrawdown
} from './stockCalculations';

export const calculateMetrics = (stock: Stock, benchmark: Stock): RiskMetrics => {
  return {
    symbol: stock.symbol,
    averageReturn: calculateAverageReturn(stock.returns),
    volatility: calculateVolatility(stock.returns),
    sharpeRatio: calculateSharpeRatio(stock.returns),
    beta: calculateBeta(stock.returns, benchmark.returns),
    alpha: calculateAlpha(stock.returns, benchmark.returns),
    maxDrawdown: calculateMaxDrawdown(stock.prices)
  };
};