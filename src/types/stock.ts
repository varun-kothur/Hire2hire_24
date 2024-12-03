export interface Stock {
  symbol: string;
  name: string;
  prices: number[];
  returns: number[];
}

export interface RiskMetrics {
  symbol: string;
  averageReturn: number;
  volatility: number;
  sharpeRatio: number;
  beta: number;
  alpha: number;
  maxDrawdown: number;
}

export interface ComparisonResult {
  stock: Stock;
  metrics: RiskMetrics;
}