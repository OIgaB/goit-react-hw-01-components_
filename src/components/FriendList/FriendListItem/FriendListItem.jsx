import PropTypes from 'prop-types';
import { FriendCell, FriendStatus } from '../FriendsListStyled';

export const FriendListItem = ({ friends }) => {  
    return (
        friends.map(({ avatar, name, isOnline, id}) => (
            <FriendCell key={id}>
                <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </FriendCell>
        )) 
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}