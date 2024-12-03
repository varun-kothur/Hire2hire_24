interface StockBasePrices {
  [key: string]: number;
}

const BASE_PRICES: StockBasePrices = {
  AAPL: 150,
  MSFT: 300,
  GOOGL: 2800,
  AMZN: 3000,
  META: 250,
  TSLA: 200,
  NVDA: 400,
  SPY: 400,
};

class MockDataService {
  private getBasePrice(symbol: string): number {
    return BASE_PRICES[symbol] || 100;
  }

  private generateDailyChange(): number {
    const volatility = 0.02;
    return (Math.random() - 0.5) * volatility;
  }

  getMockPrices(symbol: string, days: number = 100): number[] {
    const basePrice = this.getBasePrice(symbol);
    const prices = [basePrice];
    
    for (let i = 1; i < days; i++) {
      const change = this.generateDailyChange();
      prices.push(prices[i - 1] * (1 + change));
    }
    
    return prices;
  }
}

export const mockDataService = new MockDataService();