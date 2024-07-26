import { ref, getDownloadURL } from 'firebase/storage';

import { handleError } from '@utils/handleError';

import { storage } from '../../firebase';

export const getImageURL = async (tweetImage: string, setImageUrl: (url: string) => void) => {
  try {
    const imageRef = ref(storage, tweetImage);
    const url = await getDownloadURL(imageRef);

    setImageUrl(url);
  } catch (error: unknown) {
    throw handleError(error);
  }
};
