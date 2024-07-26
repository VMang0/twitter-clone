import styled from 'styled-components';

export const UploadedImageContainer = styled.div`
  position: relative;
  max-height: 300px;
  max-width: 90%;
`;

export const UploadImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;
export const CancelPictureButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 15px;
  margin: 0;
  width: 25px;
  height: 25px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: antiquewhite;
  }
`;

export const CancelPictureIcon = styled.img``;
