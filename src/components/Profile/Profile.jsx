import PropTypes from 'prop-types';
import { ProfileContainer, Description, Photo, Username, Meta, ValuesContainer, ValuesItem, Number } from './ProfileStyled';

export const Profile = ({ username, tag, location, avatar, stats }) => {  
    return (
        <ProfileContainer>
            <Description>
                <Photo
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <Username>{username}</Username>
                <Meta>@{tag}</Meta>
                <Meta $bigger>{location}</Meta>
            </Description>

            <ValuesContainer>
                <ValuesItem>
                    <Meta>Followers</Meta>
                    <Number>{stats.followers}</Number>
                </ValuesItem>
                <ValuesItem>
                    <Meta>Views</Meta>
                    <Number>{stats.views}</Number>
                </ValuesItem>
                <ValuesItem>
                    <Meta>Likes</Meta>
                    <Number>{stats.likes}</Number>
                </ValuesItem>
            </ValuesContainer>
        </ProfileContainer>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
}