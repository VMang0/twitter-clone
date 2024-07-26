import { FC } from 'react';

import NoImage from '@assets/images/no-image.png';
import { ProfileInfo, ProfileSectionContainer } from '@components/ProfileSection/styled';
import { ProfileImage } from '@styled/components/image/styled';
import { Text } from '@styled/components/typography/styled';
import { UserType } from '@type/user';

export const ProfileSection: FC<Omit<UserType, 'email' | 'id'>> = ({ image, username, name }) => {
  return (
    <ProfileSectionContainer>
      <ProfileImage src={image || NoImage} alt={`face ${name}`} size="50px" />
      <ProfileInfo>
        <Text fontWeight={600} fontSize="s">
          {name}
        </Text>
        <Text fontSize="s">@{username ?? 'unknown'}</Text>
      </ProfileInfo>
    </ProfileSectionContainer>
  );
};
