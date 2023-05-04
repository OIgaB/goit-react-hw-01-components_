import PropTypes from 'prop-types';
import { FriendItem, FriendStatus } from '../FriendsListStyled';

export const FriendListItem = ({ avatar, name, isOnline }) => {  
    return (
        <FriendItem>
            <FriendStatus status={isOnline}></FriendStatus>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}