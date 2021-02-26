import { useState, useEffect } from 'react';
import { _storage, _firestore, timestamp } from '../firebase/config';

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // references
    const storageRef = _storage.ref(file.name);
    const collectionRef = _firestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setImageUrl(url);
      }
    );
  }, [file]);

  return { progress, imageUrl, error };
}

export default useStorage;
