import PropTypes from 'prop-types';
import { TransactionHistoryTable, TransactionHistoryHead, TransactionHistoryRow } from './TransactionHistoryStyled';

export const TransactionHistory = ({ items }) => {  
    return (
        <TransactionHistoryTable>
          <TransactionHistoryHead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </TransactionHistoryHead>
          
          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <TransactionHistoryRow key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </TransactionHistoryRow>
            ))}
          </tbody>
        </TransactionHistoryTable>
    );
};

TransactionHistory.propTypes = {
    stats: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
}