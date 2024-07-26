import { FC, forwardRef, useState } from 'react';

import ArrowDropUpIcon from '@assets/icons/arrow-icon.svg';
import { ArrowIcon, SelectInput, SelectList, SelectListItem, SelectWrapper } from '@components/Select/styled';
import { OptionType, SelectPropsType } from '@components/Select/types';

export const Select: FC<SelectPropsType> = forwardRef<HTMLDivElement, SelectPropsType>(
  ({ options, placeholder, value, onChange, isError }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(
      options.find((option) => option.value === Number(value)) || null,
    );

    const toggleOptions = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const handleOptionClick = (item: OptionType) => () => {
      setSelectedOption(item);
      onChange(item.value);
      setIsOpen(false);
    };

    return (
      <SelectWrapper>
        <SelectInput isOpen={isOpen} isError={isError} onClick={toggleOptions} ref={ref}>
          {selectedOption?.label || placeholder}
          <ArrowIcon src={ArrowDropUpIcon} alt="arrow" />
        </SelectInput>
        {isOpen && (
          <SelectList>
            {options?.map((option) => (
              <SelectListItem key={option.value} onClick={handleOptionClick(option)}>
                {option.label}
              </SelectListItem>
            ))}
          </SelectList>
        )}
      </SelectWrapper>
    );
  },
);
