interface CompanyInfo {
  name: string;
  sector: string;
  description: string;
}

export const COMPANY_INFO: Record<string, CompanyInfo> = {
  NVDA: {
    name: "NVIDIA Corporation",
    sector: "Technology",
    description: "Leading designer of graphics processors and AI chips"
  },
  AAPL: {
    name: "Apple Inc.",
    sector: "Technology",
    description: "Consumer electronics and software company"
  },
  MSFT: {
    name: "Microsoft Corporation",
    sector: "Technology",
    description: "Software and cloud computing services"
  },
  GOOGL: {
    name: "Alphabet Inc.",
    sector: "Technology",
    description: "Internet services and AI technology"
  },
  META: {
    name: "Meta Platforms Inc.",
    sector: "Technology",
    description: "Social media and virtual reality"
  },
  TSLA: {
    name: "Tesla, Inc.",
    sector: "Automotive",
    description: "Electric vehicles and clean energy"
  },
  AMZN: {
    name: "Amazon.com Inc.",
    sector: "Consumer Cyclical",
    description: "E-commerce and cloud computing"
  },
  SPY: {
    name: "SPDR S&P 500 ETF Trust",
    sector: "Financial",
    description: "S&P 500 index tracking fund"
  }
};