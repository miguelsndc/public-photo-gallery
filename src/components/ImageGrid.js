import React from 'react';
import useFirestore from '../hooks/UseFirestore';

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <img src={doc.url} alt="pic" />
            </div>
          );
        })}
    </div>
  );
}

export default ImageGrid;
