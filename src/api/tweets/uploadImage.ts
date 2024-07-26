import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const uploadImage = (image: File): Promise<string> => {
  const storage = getStorage();
  const uniqueName = image.name + new Date().toLocaleString();
  const uploadedImageName = `images/${uniqueName}`;

  const imageRef = ref(storage, uploadedImageName);

  return new Promise((resolve, reject) => {
    const uploadImage = uploadBytesResumable(imageRef, image);

    uploadImage.on(
      'state_changed',
      null,
      (error) => reject(error),
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadImage.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      },
    );
  });
};
