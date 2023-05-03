import styled from 'styled-components'

export const TransactionHistoryTable = styled.table`
  margin: 60px auto;
  width: 600px;
  padding-bottom: 10px;
  text-align: center;
  color: gray;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid rgba(185, 229, 236, 0.514);
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const TransactionHistoryHead = styled.thead`
  height: 60px;
  color: #fff;
  background-color: rgba(3, 121, 167, 0.712);
  text-transform: uppercase;
`;

export const TransactionHistoryRow = styled.tr`
  height: 35px;
  &:nth-child(even) {
    background-color: rgba(185, 229, 236, 0.514);
  }
`;