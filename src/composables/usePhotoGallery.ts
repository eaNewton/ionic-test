import { onMounted, ref, watch } from 'vue'
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    }
    reader.readAsDataURL(blob);
  });

export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
  // Make it reactive with Vue's ref function
  const photos = ref<UserPhoto[]>([]);

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    })
  }

  watch(photos, cachePhotos);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    })

    const fileName = Date.now() + '.jpeg';
    const savedFileImage = await savePicture(photo, fileName);

    photos.value = [savedFileImage, ...photos.value]
  }

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      })
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }

    photos.value = photosInPreferences;
  }
  
  onMounted(loadSaved);

  return {
    photos,
    takePhoto,
  }
}

const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  console.log('photoi', photo)
  console.log('filename', fileName)
  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  console.log('response?', response)
  const blob = await response.blob();
  console.log('blob', blob)
  const base64Data = (await convertBlobToBase64(blob)) as string;
  console.log('base64Data? ', base64Data)

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  console.log('savedFile? ', savedFile)

  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  }
}
