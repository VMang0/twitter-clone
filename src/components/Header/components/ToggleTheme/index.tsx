import { FC } from 'react';

import { ToggleLabel, ToggleInput } from '@components/Header/components/ToggleTheme/styled';
import { useTheme } from '@hooks/useTheme';

import { DATA_TEST_ID } from '../../../../../cypress/e2e/data';

export const ToggleTheme: FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ToggleLabel htmlFor="switch" isDarkTheme={isDarkTheme} tabIndex={0} data-test-id={DATA_TEST_ID.TOGGLE_THEME}>
      Toggle
      <ToggleInput type="checkbox" id="switch" checked={isDarkTheme} onChange={toggleTheme} />
    </ToggleLabel>
  );
};
