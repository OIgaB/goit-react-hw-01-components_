import styled from 'styled-components';

export const FriendListContainer = styled.ul`
    max-width: 300px;
    /* text-align: center;  */
    margin: 30px auto;
    border-radius: 3px;
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const FriendCell = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 15px;
    &:not(:last-child) {
        margin-bottom: 12px;
    }
    font-size: 20px;
    font-weight: 700;
    color: rgba(24, 20, 20, 0.87);
    background-color: #fff;
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.status ? "rgba(0, 128, 0, 0.753)" : "rgba(255, 0, 0, 0.829)"};
`;