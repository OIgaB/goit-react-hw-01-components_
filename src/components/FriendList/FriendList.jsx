import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem';
import { FriendListContainer } from './FriendsListStyled';

export const FriendList = ({ friends }) => {  
    return (
        <FriendListContainer>  
            {friends.map(({ avatar, name, isOnline, id}) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </FriendListContainer>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}