import { FC, useRef, useState } from 'react';

import { ArrowIcon, SelectInput, SelectList, SelectListItem, SelectWrapper } from '@components/Select/styled';
import { OptionType, SelectPropsType } from '@components/Select/types';
import { useClickOutside } from '@hooks/useClickOutside';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Select: FC<SelectPropsType> = ({ options, placeholder, value, onChange, isError }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options.find((option) => option.value === Number(value)) || null,
  );

  const hideSelect = () => setIsOpen(false);
  const showSelect = () => setIsOpen(true);

  const handleOptionClick = (item: OptionType) => () => {
    setSelectedOption(item);
    onChange(item.value);
    hideSelect();
  };

  useClickOutside(selectRef, hideSelect);

  return (
    <SelectWrapper ref={selectRef} data-test-id={DATA_TEST_ID.SELECT}>
      <SelectInput isOpen={isOpen} isError={isError} onClick={showSelect}>
        {selectedOption?.label || placeholder}
        <ArrowIcon />
      </SelectInput>
      {isOpen && (
        <SelectList data-test-id={DATA_TEST_ID.SELECT_LIST}>
          {options?.map((option) => (
            <SelectListItem
              key={option.value}
              onClick={handleOptionClick(option)}
              data-test-id={`select-item-${option.label}`}
            >
              {option.label}
            </SelectListItem>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
