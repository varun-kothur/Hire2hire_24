import { alphaVantageClient } from './api';
import { mockDataService } from './mockDataService';
import { AlphaVantageResponse } from '../types';

export const fetchStockData = async (symbol: string): Promise<number[]> => {
  try {
    const response = await alphaVantageClient.get<AlphaVantageResponse>('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol
      }
    });

    const timeSeries = response.data['Time Series (Daily)'];
    
    if (!timeSeries) {
      console.log(`Using mock data for ${symbol} due to API limit`);
      return mockDataService.getMockPrices(symbol);
    }

    return Object.values(timeSeries)
      .slice(0, 100)
      .reverse()
      .map(day => parseFloat(day['4. close']));
  } catch (error) {
    console.log(`Using mock data for ${symbol} due to API error`);
    return mockDataService.getMockPrices(symbol);
  }
};