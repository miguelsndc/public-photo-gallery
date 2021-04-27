import { useState, useEffect } from 'react';
import { _firestore } from '../firebase/config';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = _firestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
}

export default useFirestore;
