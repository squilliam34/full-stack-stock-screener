import React from 'react';
import { Result } from '../../types/interfaces';
import { useParams } from 'react-router-dom';

interface StockDetailsProps {
  data: Result[];
}

const StockDetails: React.FC<StockDetailsProps> = ({ data }) => {
  const { symbol } = useParams<{ symbol: string }>();
  const stock = data.find((item) => item.symbol === symbol);

  if (!stock) {
    return <p>Stock not found</p>;
  }

  return (
    <div className="stock-details">
      <h2>{stock.symbol}</h2>
      <ul>
        <li>Sector: {stock.sector}</li>
        <li>Market Cap: {stock.marketcap}</li>
        <li>Price: ${stock.price}</li>
        <li>Dividend Yield: {stock.dividend}%</li>
        <li>P/E Ratio: {stock.peratio}</li>
        <li>PEG Ratio: {stock.pegratio}</li>
        <li>P/S Ratio: {stock.psratio}</li>
        <li>P/B Ratio: {stock.pbratio}</li>
        <li>Current Ratio: {stock.currentratio}</li>
        <li>Sharpe Ratio: {stock.sharperatio}</li>
        <li>EPS: {stock.eps}</li>
        <li>Net Income: {stock.netincome}</li>
        <li>Total Revenue: {stock.totalrevenue}</li>
        <li>Beta: {stock.beta}</li>
        <li>EBITDA: {stock.ebitda}</li>
        <li>ROE: {stock.roe}</li>
        <li>Gross Margin: {stock.grossmargin}%</li>
        <li>TTM High: {stock.ttmhigh}</li>
        <li>TTM Low: {stock.ttmlow}</li>
        <li>MA10: {stock.ma10}</li>
        <li>MA20: {stock.ma20}</li>
        <li>MA30: {stock.ma30}</li>
        <li>MA40: {stock.ma40}</li>
        <li>MA50: {stock.ma50}</li>
        <li>Previous Year Net Income: {stock.previousyearnetincome}</li>
        <li>Previous Year Total Revenue: {stock.previousyeartotalrevenue}</li>
        <li>Previous Year EBITDA: {stock.previousyearebitda}</li>
        <li>Previous Quarter Net Income: {stock.previousquarternetincome}</li>
        <li>Previous Quarter Total Revenue: {stock.previousquartertotalrevenue}</li>
        <li>Previous Quarter EBITDA: {stock.previousquarterebitda}</li>
      </ul>
    </div>
  );
};

export default StockDetails;
