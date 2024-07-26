import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@assets/icons/arrow-back-icon.svg';
import { CurrentPageSectionContainer } from '@components/Header/components/CurrentPageSection/styled';
import { ArrowBack } from '@components/Header/styled';
import { navbar } from '@constants/navbar';
import { Paths } from '@constants/paths';
import { Text } from '@styled/components/typography/styled';

export const CurrentPageSection = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePage = pathname === Paths.FEED;

  const currentPage = useMemo(() => {
    return navbar.filter((item) => item.link === pathname)[0].label;
  }, [pathname]);

  const handleGoBack = () => navigate(-1);

  return (
    <CurrentPageSectionContainer>
      {!isHomePage && (
        <ArrowBack src={ArrowBackIcon} alt="arrow to back page" onClick={handleGoBack} loading="lazy" tabIndex={0} />
      )}
      <Text fontSize="exl" fontWeight={700} fontFamily="secondary">
        {currentPage}
      </Text>
    </CurrentPageSectionContainer>
  );
};
