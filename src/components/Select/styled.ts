import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
`;

export const SelectInput = styled.div<{ isOpen: boolean; isError: boolean }>`
  width: 100%;
  height: 70px;
  border: 1px solid ${({ isError }) => (isError ? 'red' : 'rgba(0, 0, 0, 0.2)')};
  border-radius: 6px;
  padding: 20px 23px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: rgba(0, 0, 0, 0.6);
  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(-50%, -50%) ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
  box-sizing: border-box;
`;

export const SelectList = styled.ul`
  top: 105%;
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.themeColors[300]};
  border-radius: 18px;
  max-height: 140px;
  overflow-y: auto;
  z-index: 100;
`;

export const SelectListItem = styled.li`
  padding: 11px 16px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[200]};
  }
  &:last-child:hover {
    border-radius: 0 0 18px 18px;
    background-color: ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const ArrowIcon = styled.img`
  width: 15px;
  filter: invert(0) sepia(0) hue-rotate(0deg) saturate(0%) opacity(0.6);
`;
