import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 30px auto;
  max-width: 300px;
  padding-top: 50px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  padding-bottom: 30px;
`;

export const Photo = styled.img`
  width: 250px;
  border-radius: 50%;
  background-color: bisque;
  align-items: center;
  margin: 0 auto 20px auto;
`;

export const Username = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
`;

export const Meta = styled.p`
  text-align: center;
  color: gray;  
  font-size: ${props => props.$bigger ? "20px" : "18x"};
  margin-bottom: 3px;
`;

export const ValuesContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ValuesItem = styled.li`
  flex-basis: calc(100% /3);
  background-color: bisque;
  outline: 1px solid rgba(128, 128, 128, 0.30);
  padding: 20px 15px;
  text-align: center;
  &:not(:last-child) {
    border-right-width: 0;
  }
`;

export const Number = styled.span`
  font-size: 20px;
  font-weight: 700;
`;