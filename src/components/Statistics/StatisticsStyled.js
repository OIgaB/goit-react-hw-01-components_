import styled from 'styled-components'

export const StatisticsContainer = styled.section`
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const StatisticsTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    text-transform: uppercase;
    color: gray;
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

export const StatisticsCell = styled.li`
  outline: 1px solid rgba(128, 128, 128, 0.30);
  padding: 15px 25px;
  text-align: center;
  &:not(:last-child) {
    border-right-width: 0;
  }
`;

export const StatisticsValue = styled.span`
  display: block;
  color: #fff;  
  font-size: ${props => props.$bigger ? "20px" : "18x"};
`;

