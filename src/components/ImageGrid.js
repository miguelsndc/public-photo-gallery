import React from 'react';
import useFirestore from '../hooks/UseFirestore';
import { StyledImageGrid } from '../styles/ImageGrid.sc';

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <StyledImageGrid>
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
    </StyledImageGrid>
  );
}

export default ImageGrid;
