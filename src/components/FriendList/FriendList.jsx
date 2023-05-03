import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem';
import friends from './friends.json';
import { FriendListContainer } from './FriendsListStyled';

export const FriendList = () => {  
    return (
    <FriendListContainer>
        <FriendListItem friends={friends} />
    </FriendListContainer>
    );
}
