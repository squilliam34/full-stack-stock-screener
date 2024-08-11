import { Result } from "./interfaces";

const sampleData: Result[] = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    marketcap: "Large Cap",
    price: 128.34,
    peratio: 74.97,
    pegratio: 1.44,
    psratio: 39.33,
    currentratio: 5.12,
    sharperatio: 1.28,
    eps: 1.73,
    netincome: 42598000,
    totalrevenue: 79744700,
    beta: 1.78,
    grossmargin: (60059000 / 79744700) * 100,
    ttmhigh: 140.76,
    ttmlow: 39.23,
    ma10: 125.22,
    ma20: 117.9,
    ma30: 107.38,
    ma40: 95.41,
    ma50: 80.07,
    previousyearnetincome: 38338200,
    previousyeartotalrevenue: 71770230,
    previousquarternetincome: 29818600, // 30% less
    previousquartertotalrevenue: 71770230, // 10% less
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    marketcap: "Large Cap",

    price: 451.28,
    peratio: 40.37,
    pegratio: 2.31,
    psratio: 14.76,

    currentratio: 3.4,
    sharperatio: 1.93,
    eps: 11.83,
    netincome: 86181000,
    totalrevenue: 236584000,
    beta: 1.08,

    grossmargin: (165359000 / 236584000) * 100,
    ttmhigh: 468.35,
    ttmlow: 309.45,
    ma10: 455.42,
    ma20: 448.97,
    ma30: 443.21,
    ma40: 437.89,
    ma50: 429.56,
    previousyearnetincome: 68944800,
    previousyeartotalrevenue: 189267200,

    previousquarternetincome: 60326700, // 30% less
    previousquartertotalrevenue: 212925600, // 10% less
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",

    marketcap: "Large Cap",
    price: 164.36,
    peratio: 12.38,
    pegratio: 3.36,
    psratio: 1.93,

    currentratio: 2.93,
    sharperatio: 3.22,
    eps: 7.07,
    netincome: 50349000,
    totalrevenue: 158512000,
    beta: 0.82,

    grossmargin: -1,
    ttmhigh: 211.61,
    ttmlow: 135.19,
    ma10: 169.87,
    ma20: 165.24,
    ma30: 160.76,
    ma40: 155.43,
    ma50: 149.89,
    previousyearnetincome: 35244300,
    previousyeartotalrevenue: 111358400,
    previousquarternetincome: 30209400, // 20% less
    previousquartertotalrevenue: 142660800, // 10% less
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    marketcap: "Large Cap",
    price: 114.93,
    peratio: 29.77,
    pegratio: 1.45,
    psratio: 2.48,
    currentratio: 2.15,
    sharperatio: 2.14,
    eps: 9.43,
    netincome: 18390000,
    totalrevenue: 34871000,
    beta: 0.56,

    grossmargin: (27331000 / 34871000) * 100,
    ttmhigh: 290.96,
    ttmlow: 227.68,
    ma10: 118.67,
    ma20: 116.42,
    ma30: 111.87,
    ma40: 108.56,
    ma50: 105.24,
    previousyearnetincome: 19862100,
    previousyeartotalrevenue: 31383900,
    previousquarternetincome: 16551000, // 10% less
    previousquartertotalrevenue: 31383900, // 30% less
  },
  {
    symbol: "TMO",
    name: "Thermo Fisher Scientific Inc.",

    marketcap: "Large Cap",

    price: 547.84,
    peratio: 34.36,
    pegratio: 0.57,
    psratio: 4.92,

    currentratio: 0.06,
    sharperatio: 4.81,
    eps: 15.73,
    netincome: 6034000,
    totalrevenue: 42492000,
    beta: 0.97,

    grossmargin: (17165000 / 42492000) * 100,
    ttmhigh: 603.82,
    ttmlow: 415.16,
    ma10: 549.37,
    ma20: 400.69,
    ma30: 542.48,
    ma40: 539.12,
    ma50: 533.75,
    previousyearnetincome: 5832960,
    previousyeartotalrevenue: 33993600,

    previousquarternetincome: 4713000, // 20% less
    previousquartertotalrevenue: 29744400, // 30% less
  },
];

export default sampleData;
