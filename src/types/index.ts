// Stock related types
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

// Component props types
export interface StockSelectorProps {
  selectedStocks: string[];
  onAddStock: (symbol: string) => void;
  onRemoveStock: (symbol: string) => void;
}

export interface StockMetricsCardProps {
  metrics: RiskMetrics;
}

export interface PerformanceChartProps {
  stocks: Stock[];
  benchmark: Stock;
}

export interface LandingPageProps {
  onEnter: () => void;
}

// API response types
export interface AlphaVantageResponse {
  'Time Series (Daily)': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}