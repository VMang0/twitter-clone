import ArrowBackIcon from '@assets/icons/arrow-back-icon.svg?react';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CurrentPageSectionContainer } from '@components/Header/components/CurrentPageSection/styled';
import { navbar } from '@constants/navbar';
import { Paths } from '@constants/paths';
import { Text } from '@styled/components/typography/styled';

export const CurrentPageSection = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePage = pathname === Paths.FEED;

  const currentPage = useMemo(() => {
    return navbar.filter(({ link }) => pathname.includes(link))[0]?.label;
  }, [pathname]);

  const handleGoBack = () => navigate(-1);

  return (
    <CurrentPageSectionContainer>
      {!isHomePage && <ArrowBackIcon onClick={handleGoBack} tabIndex={0} />}
      <Text fontSize="l" fontWeight={700} fontFamily="secondary">
        {currentPage}
      </Text>
    </CurrentPageSectionContainer>
  );
};
