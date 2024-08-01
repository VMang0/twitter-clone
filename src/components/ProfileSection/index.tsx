import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import NoImage from '@assets/images/no-image.png';
import { ProfileInfo, ProfileSectionContainer, SubscribeButton } from '@components/ProfileSection/styled';
import { ProfileSectionType } from '@components/ProfileSection/type';
import { Paths } from '@constants/paths';
import { ProfileImage } from '@styled/components/image/styled';
import { Text } from '@styled/components/typography/styled';

export const ProfileSection: FC<ProfileSectionType> = memo(
  ({ isSubscribe = false, isNavigateToProfile = false, ...profileData }) => {
    const { image, username, name, id } = profileData;
    const navigate = useNavigate();

    const navigateToProfile = () => isNavigateToProfile && navigate(`${Paths.PROFILE}/${id}`);

    return (
      <ProfileSectionContainer onClick={navigateToProfile} isShouldNavigate={isNavigateToProfile}>
        <ProfileImage profileUrl={image || NoImage} width="w50" height="w50" />
        <ProfileInfo>
          <Text fontWeight={600} fontSize="xs">
            {name}
          </Text>
          <Text fontSize="xs">@{username ?? 'unknown'}</Text>
        </ProfileInfo>
        {isSubscribe && <SubscribeButton>Follow</SubscribeButton>}
      </ProfileSectionContainer>
    );
  },
);
