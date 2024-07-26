import { FC } from 'react';

import { ToggleLabel, ToggleInput } from '@components/Header/components/ToggleTheme/styled';
import { useTheme } from '@hooks/useTheme';

export const ToggleTheme: FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ToggleLabel htmlFor="switch" isDarkTheme={isDarkTheme} tabIndex={0}>
      Toggle
      <ToggleInput type="checkbox" id="switch" checked={isDarkTheme} onChange={toggleTheme} />
    </ToggleLabel>
  );
};
