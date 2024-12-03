export const calculateReturns = (prices: number[]): number[] => {
  return prices.slice(1).map((price, i) => 
    ((price - prices[i]) / prices[i]) * 100
  );
};

export const calculateAverageReturn = (returns: number[]): number => {
  return returns.reduce((sum, ret) => sum + ret, 0) / returns.length;
};

export const calculateVolatility = (returns: number[]): number => {
  const avgReturn = calculateAverageReturn(returns);
  const squaredDiffs = returns.map(ret => Math.pow(ret - avgReturn, 2));
  return Math.sqrt(squaredDiffs.reduce((sum, diff) => sum + diff, 0) / returns.length);
};

export const calculateSharpeRatio = (returns: number[], riskFreeRate: number = 2): number => {
  const avgReturn = calculateAverageReturn(returns);
  const volatility = calculateVolatility(returns);
  return (avgReturn - riskFreeRate) / volatility;
};

export const calculateBeta = (stockReturns: number[], benchmarkReturns: number[]): number => {
  const stockAvg = calculateAverageReturn(stockReturns);
  const benchmarkAvg = calculateAverageReturn(benchmarkReturns);
  
  const covariance = stockReturns.reduce((sum, ret, i) => 
    sum + (ret - stockAvg) * (benchmarkReturns[i] - benchmarkAvg), 0
  ) / stockReturns.length;
  
  const benchmarkVariance = calculateVolatility(benchmarkReturns) ** 2;
  return covariance / benchmarkVariance;
};

export const calculateAlpha = (
  stockReturns: number[],
  benchmarkReturns: number[],
  riskFreeRate: number = 2
): number => {
  const stockAvgReturn = calculateAverageReturn(stockReturns);
  const beta = calculateBeta(stockReturns, benchmarkReturns);
  const benchmarkAvgReturn = calculateAverageReturn(benchmarkReturns);
  
  return stockAvgReturn - (riskFreeRate + beta * (benchmarkAvgReturn - riskFreeRate));
};

export const calculateMaxDrawdown = (prices: number[]): number => {
  let maxDrawdown = 0;
  let peak = prices[0];
  
  for (const price of prices) {
    if (price > peak) {
      peak = price;
    }
    const drawdown = (peak - price) / peak;
    maxDrawdown = Math.max(maxDrawdown, drawdown);
  }
  
  return maxDrawdown * 100;
};